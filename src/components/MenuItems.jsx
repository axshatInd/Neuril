/* Node Modules */
import PropTypes from 'prop-types';

const MenuItems = ({ classes = '', labelText, onClick, ...rest }) => {
  return (
    <button
      className={`menu-item ${classes}`}
      onClick={(e) => {
        e.stopPropagation(); // Prevents unwanted event bubbling
        // console.log(`Clicked: ${labelText}`); // 🔍 Debugging log
        if (onClick) onClick();
      }}
      {...rest} // Spread other props (like `data-testid`, etc.)
    >
      <span>{labelText}</span>
      <div className='state-layer'></div>
    </button>
  );
};

MenuItems.propTypes = {
  classes: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default MenuItems;
