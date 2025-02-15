/* Node Modules */
import PropTypes from 'prop-types';

const MenuItems = ({ classes = '', labelText, ...rest }) => {
  return (
    <button className={`menu-item ${classes} {...rest}`}>
      <span>{labelText}</span>
      <div className='state-layer'></div>
    </button>
  );
};

MenuItems.propTypes = {
  classes: PropTypes.string,
  labelText: PropTypes.string,
};

export default MenuItems;
