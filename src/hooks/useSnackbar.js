/* Node modules */
import { useContext } from 'react';

/* Context */
import { SnackbarContext } from '../contexts/SnackbarContext';

export const useSnackbar = () => useContext(SnackbarContext);
