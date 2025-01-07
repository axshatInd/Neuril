// Node Modules
import React from 'react';
import { Link, Form } from 'react-router-dom';
// Custom modules
import { logoDark, logoLight } from '../assets/assets';

// Components
import PageTitle from '../components/PageTitle';
import TextField from '../components/TextField';
import { Button } from '../components/Button';

const Register = () => {
  return (
    <>
      <PageTitle title='Create an account ' />
      <div className=''>
        <div className=''>
          <Link>
            <img
              src={logoLight}
              alt='Neuril Logo'
              width={133}
              height={24}
              className=''
            />
            <img
              src={logoDark}
              alt='Neuril Logo'
              width={133}
              height={24}
              className=''
            />
          </Link>
          <div className=''>
            <h2 className=''>Create an account</h2>
            <p className=''>
              Register today and gain access to your powerful AI companion that
              will supercharge your ideas.
            </p>
            <Form
              method='POST'
              className=''
            >
              <TextField
                type='text'
                name='name'
                label='Full Name'
                placeholder='Full Name'
                required={true}
                autoFocus={true}
              />
              <TextField
                type='email'
                name='email'
                label='Email'
                placeholder='Email'
                required={true}
              />
              <TextField
                type='password'
                name='password'
                label='Password'
                placeholder='Enter your password'
                required={true}
              />
              <Button type='submit'>Create account</Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
