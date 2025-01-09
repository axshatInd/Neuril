/* Custom Modules */
import { account } from '../../lib/appwrite';
import generateID from '../../utils/generateID';

/* Handles user registration */
const registerAction = async ({ request }) => {
  /* retrieve the form data from the incoming request */
  const formData = await request.formData();
  try {
    //Creates a new user account using the provided email, password and name
    await account.create(
      generateID(), //Generates a unique ID for the user
      formData.get('email'), //Retrieves email from form data
      formData.get('password'), //Retrieves password from form data
      formData.get('name'), //Retrieves name from form data
    );
  } catch (err) {
    //Return an error object if account creation fails
    return {
      message: err.message, //Error message from the caught error
    };
  }
  return null;
};

export default registerAction;
