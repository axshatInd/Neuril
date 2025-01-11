/* Node modules */
import { redirect } from 'react-router-dom';

/* Custom modules */
import { account } from '../../lib/appwrite';

/* Handle the login action */
const loginAction = async ({ request }) => {
  //Retrieve the form data from the incoming request
  const formData = await request.formData();
  try {
    //Attempt to create a session from the email and password from the form data
    await account.createEmailPasswordSession(
      formData.get('email'),
      formData.get('password'),
    );
    //On successful login, redirect the user to the homepage
    return redirect('/');
  } catch (err) {
    //Return an error response with a error message
    return {
      message: err.message,
    };
  }
};

export default loginAction;
