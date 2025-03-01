/* Custom modules */
import { account } from '../lib/appwrite';

/**
 * Logs out the current user by deleting their session and redirects to the login page.
 * @async
 * @function logout
 * @param {Function} navigate - The navigation function to redirect the user after logout
 * @returns {Promise<void>} - Returns a promise that resolves once the session is deleted and navigation occurs.
 * @throws {Error} if there is an issue deleting the user session, the error will be logged to the console.
 */
const logout = async (navigate) => {
  try {
    console.log('Attempting to delete session...');
    await account.deleteSession('current');
    console.log('Session deleted successfully.');
  } catch (err) {
    console.error(`Error deleting user session: ${err.message}`);
    return;
  }

  console.log('Navigating to /login...');
  navigate('/login');
};

export default logout;
