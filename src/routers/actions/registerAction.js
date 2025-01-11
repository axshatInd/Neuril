/* Node Modules */
import { redirect } from 'react-router-dom';

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

  /* After successfully account create, login the user and redirect to homepage */
  try {
    //Creates a Session for the new user with the provided email and password
    await account.createEmailPasswordSession(
      formData.get('email'),
      formData.get('password'),
    );
  } catch (err) {
    //Logs any error encountered during session creation and redirect to login page
    console.log(`Error creating email session: ${err.message}`);
    return redirect('/login');
  }

  /* Redirects the user to the home page upon successful registration and login */
  return redirect('/');
};

export default registerAction;
