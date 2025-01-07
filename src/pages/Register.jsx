// Node Modules
import React from 'react';
import { Link, Form } from 'react-router-dom';
// Custom modules
import { logoDark, logoLight } from '../assets/assets';

// Components
import PageTitle from '../components/PageTitle';

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
            ></Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
