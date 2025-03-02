/* Node modules */
import { redirect } from 'react-router-dom';
import { Query } from 'appwrite';

/* Custom Modules */
import { account, databases } from '../../lib/appwrite';

const appLoader = async () => {
  const data = {};
  try {
    // Attempt to retrieve user's account information
    data.user = await account.get();
  } catch (err) {
    console.log(`Error getting user session: ${err.message}`);

    //Redirect to login page if account retrieval fails
    return redirect('/login');
  }

  try {
    data.conversation = await databases.listDocuments(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'conversations',
      [
        Query.select(['$id', 'title']),
        Query.orderDesc('$createdAt'),
        Query.equal('user_id', data.user.$id),
      ],
    );
  } catch (err) {
    console.log(`Error getting conversations: ${err.message}`);
  }

  return data;
};

export default appLoader;
