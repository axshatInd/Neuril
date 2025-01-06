import { createBrowserRouter } from 'react-router-dom';

/* 
Components
*/
import App from '../App.jsx';

/* 
Router
*/
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

export default router;
