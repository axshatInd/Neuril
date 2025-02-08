/* Node Modules */
import { Link } from 'react-router-dom';

/* Components */
import { IconBtn } from './Button';
import Avatar from './Avatar';

/* Assets */
import { logoLight, logoDark } from '../assets/assets';

const TopAppBar = () => {
  return (
    <header className=''>
      <div className=''>
        <IconBtn
          icon='menu'
          title='Menu'
        />

        <Link
          to='/'
          className=''
        >
          <img
            src={logoLight}
            width={133}
            height={24}
            alt='Neuril Logo'
            className='dark:hidden'
          />

          <img
            src={logoDark}
            width={133}
            height={24}
            alt='Neuril Logo'
            className='hidden dark:block'
          />
        </Link>
      </div>

      <div className='menu-wrapper'>
        <IconBtn>
          <Avatar name='Akshat' />
        </IconBtn>
      </div>
    </header>
  );
};

export default TopAppBar;
