/* Node Modules */
import { redirect } from 'react-router-dom';

/* Custom modules */
import { account } from '../../lib/appwrite';

const resetPasswordLoader = async ({ request }) => {
  const url = new URl(request.url);
  try {
    // Attempt to retrieve the user's account information
    await account.get();

    //If account retrieval is successful, redirect the user to the home page ('/')
    return redirect('/');
  } catch (err) {
    console.log(`Error getting user session: ${err.message}`);
  }

  if (!url.searchParams.get('userId') && !url.searchParams.get('secret')) {
    return redirect('/reset-link');
  }

  return null;
};

export default resetPasswordLoader;
