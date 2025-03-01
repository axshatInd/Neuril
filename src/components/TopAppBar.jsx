/* Node Modules */
import { Link, useNavigation } from 'react-router-dom';

/* Components */
import { IconBtn } from './Button';
import Avatar from './Avatar';
import Menu from './Menu';
import MenuItems from './MenuItems';
import { LinearProgress } from './Progress';
import { AnimatePresence } from 'framer-motion';

/* Assets */
import { logoLight, logoDark } from '../assets/assets';

const TopAppBar = () => {
  // -useNavigation: Provides navigation state (loading, idle, submitting, etc.)
  const navigation = useNavigation();

  /* 
  Check if the current navigation state is 'loading' and if there is no form data associated with the navigation. 
  This condition typically signifies a normal page load, 
  where the page is loading for the first time or is being reloaded without submitting a form.
  */
  const isNormalLoad = navigation.state == 'loading' && !navigation.formData;

  return (
    <header className='relative flex justify-between items-center h-16 px-4'>
      <div className='flex items-center gap-1'>
        <IconBtn
          icon='menu'
          title='Menu'
          classes='lg:hidden'
        />

        <Link
          to='/'
          className='min-w-max max-w-max h-[24px] lg:hidden'
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

        <Menu classes='active'>
          <MenuItems labelText='Log out' />
        </Menu>
      </div>

      <AnimatePresence>{isNormalLoad && <LinearProgress />}</AnimatePresence>
    </header>
  );
};

export default TopAppBar;
