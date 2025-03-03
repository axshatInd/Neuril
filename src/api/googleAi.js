/* Generates a short conversation title based on the provided user prompt
 *
 * This function utilizes google generative ai model to create a concise title for a conversation.
 * It sends the user prompt to the model and requests a generated response containing a single short title.
 *
 * @async
 * @function getConversationTitle
 * @param {string} userPrompt - The text input from which the conversation title will be generated/
 * @returns {Promise<string>} - A promise that resolves to the generated conversation title as a plain text string.
 */

/* Custom modules */
import { text } from 'framer-motion/client';
import model from '../lib/googleAi';

const getConversationTitle = async (userPrompt) => {
  try {
    const result = await model.generateContent(
      `Given a user prompt, generate a concise and informative title that accurately describes the conversation. Consider keywords, topics, and the overall intent of the prompt. Response in plain text format, not markdown.
      
      Prompt: ${userPrompt}`,
    );
    return result.response.text();
  } catch (err) {
    console.log(`Error generating conversation title: ${err.message}`);
  }
};

/* Get a response from an AI model based on the user's prompt and the chat history.
 *
 * @param {string} userPrompt The user's input prompt.
 * @param {Array<{ user_prompt: string, ai_response: string}>} chats - An array of previous user prompts and AI responses, used to provide context to the model.
 * @returns {Promise<string>} A promise that resolves with the AI's response, or rejects with an error.
 */

const getAiResponse = async (userPrompt, chats = []) => {
  const history = [];
  chats.forEach(({ user_prompt, ai_response }) => {
    history.push(
      {
        role: 'user',
        parts: [{ text: user_prompt }],
      },
      {
        role: 'model',
        parts: [{ text: ai_response }],
      },
    );
  });
  try {
    model.generationConfig = { temperature: 1.5 };
    const chat = model.startChat({ history });
    const result = await chat.sendMessage(userPrompt);

    return result.response.text();
  } catch (err) {
    console.log(`Error generating AI response: ${err.message}`);
  }
};

export { getConversationTitle, getAiResponse };
