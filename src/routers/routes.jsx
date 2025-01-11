import { createBrowserRouter } from 'react-router-dom';

/* 
Components
*/
import App from '../App.jsx';
import Register from '../pages/Register.jsx';
import Login from '../pages/Login.jsx';

/* Actions */
import registerAction from './actions/registerAction.js';
import loginAction from './actions/loginAction.js';

/* 
Router
*/
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register',
    element: <Register />,
    action: registerAction,
  },
  {
    path: '/login',
    element: <Login />,
    action: loginAction,
  },
]);

export default router;
