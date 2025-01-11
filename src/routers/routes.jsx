import { createBrowserRouter } from 'react-router-dom';

/* 
Components
*/
import App from '../App.jsx';
import Register from '../pages/Register.jsx';
import Login from '../pages/Login.jsx';

/* Loaders */
import registerLoader from './loaders/registerLoader.js';
import loginLoader from './loaders/loginLoader.js';

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
    loader: registerLoader,
    action: registerAction,
  },
  {
    path: '/login',
    element: <Login />,
    loader: loginLoader,
    action: loginAction,
  },
]);

export default router;
