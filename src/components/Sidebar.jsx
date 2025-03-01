/* Node modules */
import PropTypes from 'prop-types';

/* Components */
import Logo from './Logo';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-inner'>
        <div className=''>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
