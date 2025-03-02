/* Node modules */
import { redirect } from 'react-router-dom';

/* Custom modules */
import { account, databases } from '../../lib/appwrite';

const conversationLoader = async ({ params }) => {
  const { conversationId } = params;
  const data = {};

  try {
    // Attempt to retrieve user's account information
    data.user = await account.get();
  } catch (err) {
    console.log(`Error getting user account: ${err.message}`);
    // If there's an error getting the user, log it and redirect to the login page.
    return redirect('/login');
  }

  try {
    // Attempt to fetch the conversation document from the Appwrite database.
    data.conversation = await databases.getDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'conversations',
      conversationId,
    );
  } catch (err) {
    // If there's an error fetching the conversation, log it and re-throw the error.
    console.log(`Error getting conversation: ${err.message}`);
    throw err; // Re-throw the error so it can be handled by the Error Boundary or a suitable component.
  }

  // Return the data object containing user and conversation information.

  return data;
};

export default conversationLoader;
