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

export { getConversationTitle };
