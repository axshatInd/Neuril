/* Node Modules */
import { redirect } from 'react-router-dom';

/* Custom Modules */
import { account } from '../../lib/appwrite';

const resetPasswordAction = async ({ request }) => {
  const formData = await request.formData();
  const url = new URL(request.url);

  try {
    await account.updateRecovery(
      url.searchParams.get('userId'),
      url.searchParams.get('secret'),
      formData.get('password'),
    );
  } catch (err) {
    console.log(`Error updating password: ${err.message}`);

    return {
      message: err.message,
    };
  }
};

export default resetPasswordAction;
