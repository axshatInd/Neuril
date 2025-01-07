import { createBrowserRouter } from 'react-router-dom';

/* 
Components
*/
import App from '../App.jsx';
import Register from '../pages/Register.jsx';

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
  },
]);

export default router;
