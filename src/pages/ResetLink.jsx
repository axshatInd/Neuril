// Node Modules
import React from 'react';
import { Link, Form, useNavigation, useActionData } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

//Assets
import { logoDark, logoLight, banner } from '../assets/assets';

//Custom hooks
import { useSnackbar } from '../hooks/useSnackbar';

// Components
import PageTitle from '../components/PageTitle';
import TextField from '../components/TextField';
import { Button } from '../components/Button';
import { CircularProgress, LinearProgress } from '../components/Progress';

const ResetLink = () => {
  //Get error data from form submission using useActionData (likely from React Router)
  const actionData = useActionData();
  // Get navigation state e.g. loading/submitting etc
  const navigation = useNavigation();

  const { showSnackbar } = useSnackbar();
  useEffect(() => {
    //Show snackbar with the provided error message
    if (actionData) {
      showSnackbar({
        message: actionData.message,
        type: actionData.ok ? 'info' : 'error',
        timeOut: 8000,
      });
    }
  }, [actionData, showSnackbar]);
  return (
    <>
      <PageTitle title='Reset Password' />
      <div className='relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-4'>
          <Link
            to={'/'}
            className='max-w-max mb-auto mx-auto justify-center'
          >
            <img
              src={logoLight}
              alt='Neuril Logo'
              width={133}
              height={24}
              className='dark:hidden'
            />
            <img
              src={logoDark}
              alt='Neuril Logo'
              width={133}
              height={24}
              className='hidden dark:block'
            />
          </Link>
          <div className='flex flex-col gap-2 max-w-[480px] w-full mx-auto'>
            <h2 className='text-displaySmall font-semibold text-light-onBackground dark:text-dark-onBackground text-center'>
              Forgot your password?
            </h2>
            <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
              Please enter your account details
            </p>
            <Form
              method='POST'
              className='grid grid-cols-1 gap-4'
            >
              <TextField
                type='email'
                name='email'
                label='Email'
                placeholder='Email'
                helperText='The reset link to be sent is valid for 1 hour.'
                required={true}
                autoFocus={true}
              />

              <Button
                type='submit'
                disabled={navigation.state == 'submitting'}
              >
                {navigation.state == 'submitting' ? (
                  <CircularProgress size='small' />
                ) : (
                  'Get Link'
                )}
              </Button>
            </Form>
          </div>
          <p className='mt-auto mx-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-bodyMedium lg:mx-0 '>
            &copy; 2025 axshatind. All rights reserved
          </p>
        </div>
        <div className='hidden img-box lg:block lg:relative lg:rounded-large'>
          <img
            src={banner}
            alt=''
            className='img-cover'
          />
          <p className='absolute bottom-10 left-12 right-12 z-10 text-displayLarge font-semibold leading-tight text-right text-light-onSurface drop-shadow-sm 2xl:text-[72px]'>
            Chat with Neuril & supercharge your ideas.
          </p>
        </div>
      </div>
      <AnimatePresence>
        {navigation.state == 'loading' && (
          <LinearProgress classes='absolute top-0 left-0 right-0' />
        )}
      </AnimatePresence>
    </>
  );
};

export default ResetLink;
