/* Custom modules */
import { account } from '../../lib/appwrite';

const resetLinkAction = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get('email');

  try {
    await account.createRecovery(email, `${location.origin}/reset-password`);

    return {
      ok: true,
      message:
        'You will receive a password reset link shortly. Please check your email and follow the instructions to reset your password.',
    };
  } catch (err) {
    console.log(`Error getting password reset link: ${err.message}`);
    return {
      ok: false,
      message: err.message,
    };
  }
};

export default resetLinkAction;
