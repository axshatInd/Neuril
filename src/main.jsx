import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

/* 
Custom Modules
*/
import router from './routers/routes.jsx';

/* Components */
import SnackbarProvider from './contexts/SnackbarContext.jsx';

/* 
CSS Link
*/
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider>
      <RouterProvider router={router} />
    </SnackbarProvider>
  </StrictMode>,
);
