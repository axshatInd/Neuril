/* Node Modules */
import { motion } from 'framer-motion';

/* Components */
import { IconBtn } from './Button';

const PromptField = () => {
  return (
    <motion.div className='prompt-field-container'>
      <motion.div
        className='prompt-field'
        contentEditable={true}
        role='textbox'
        aria-multiline={true}
        aria-label="What's on your mind?"
        data-placeholder="What's on your mind?"
      />
      <IconBtn
        icon='send'
        title='Submit'
        size='large'
        classes='ms-auto'
      />
      <div className='state-layer'></div>
    </motion.div>
  );
};

export default PromptField;
