/* Node modules */
import { redirect } from 'react-router-dom';

/* Custom Modules */
import { account } from '../../lib/appwrite';

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

  return data;
};

export default appLoader;
