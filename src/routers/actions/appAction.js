/* Handles incoming requests based on the 'request_type' form data.
 * @async
 * @function appAction
 * @param {object} request - The incoming request object containing the form data.
 * @returns {Promise<*>} - Returns the result of the action based on the 'request_type' (e.g. 'userPromptAction' or 'conversationAction').
 */

/* Custom modules */
import { account } from '../../lib/appwrite';
import { getConversationTitle } from '../../api/googleAi';

const usePromptAction = async (formData) => {
  const userPrompt = formData.get('user_prompt');
  // Get current user info
  const user = await account.get();

  // Get a conversation title based on user prompt
  const conversationTitle = await getConversationTitle(userPrompt);
  console.log(conversationTitle);
  return null;
};

const appAction = async ({ request }) => {
  const formData = await request.formData();
  const requestType = formData.get('request_type');

  if (requestType === 'user_prompt') {
    return await usePromptAction(formData);
  }
};

export default appAction;
