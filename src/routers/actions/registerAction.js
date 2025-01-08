/* Custom Modules */
import { account } from '../../lib/appwrite';

/* Handles user registration */
const registerAction = async ({ request }) => {
  /* retrieve the form data from the incoming request */
  const formData = await request.formData();
  console.log(formData.get('name'));
  console.log(formData.get('email'));
  console.log(formData.get('password'));
  return null;
};

export default registerAction;
