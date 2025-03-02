/* Node Modules */
import { motion } from 'framer-motion';
import { useRef, useCallback, useState } from 'react';
import { useNavigate, useNavigation, useSubmit } from 'react-router-dom';

/* Components */
import { IconBtn } from './Button';

const PromptField = () => {
  /* 'inputField' and 'inputFieldContainer' hold references to their DOM elements */
  const inputField = useRef();
  const inputFieldContainer = useRef();

  // Manual form submission
  const submit = useSubmit();
  //initial navigation for checking state
  const navigation = useNavigation();

  // State for input field
  const [placeholderShown, setPlaceholderShown] = useState(true);
  const [isMultiline, setMultiline] = useState(false);
  const [inputValue, setInputValue] = useState('');

  //Handle input field input change
  const handleInputChange = useCallback(() => {
    if (inputField.current.innerText === '\n')
      inputField.current.innerHTML = '';
    setPlaceholderShown(!inputField.current.innerText);
    setMultiline(inputFieldContainer.current.clientHeight > 64);
    setInputValue(inputField.current.innerText.trim());
  }, []);

  // Move cursor to the end after paste text in input field
  const moveCursorToEnd = useCallback(() => {
    const editableElem = inputField.current;
    const range = document.createRange();
    const selection = window.getSelection();

    // Set the range to the last child of the editable element
    range.selectNodeContents(editableElem);
    range.collapse(false); // Collapse the range to the end

    // Clear existing selections and add the new range
    selection.removeAllRanges();
    selection.addRange(range);
  }, []);

  // Handle Pasted Text
  const handlePaste = useCallback(
    (e) => {
      e.preventDefault();
      inputField.current.innerText += e.clipboardData.getData('text');
      handleInputChange();
      moveCursorToEnd();
    },
    [handleInputChange, moveCursorToEnd],
  );

  // Handle Submit
  const handleSubmit = useCallback(() => {
    // Prevent submission if the input is empty or form submission is ongoing.
    if (!inputValue || navigation.state === 'submitting') return;
    submit(
      {
        user_prompt: inputValue,
        request_type: 'user_prompt',
      },
      {
        method: 'POST',
        encType: 'application/x-www-form-urlencoded',
        action: '/',
      },
    );

    inputField.current.innerHTML = '';
    handleInputChange();
  }, [handleInputChange, inputValue, navigation.state, submit]);

  /* Defines a Framer Motion variant for the prompt field, controlling its animation based on its visibility state */
  const promptFieldVariant = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
        duration: 0.4,
        delay: 0.4,
        ease: [0.05, 0.7, 0.1, 1],
      },
    },
  };

  /* Defines a Framer Motion variant for the prompt field children, controlling its animation based on its visibility state */
  const promptFieldChildrenVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className={`prompt-field-container ${isMultiline ? 'rounded-large' : ''}`}
      variants={promptFieldVariant}
      initial='hidden'
      animate='visible'
      ref={inputFieldContainer}
    >
      <motion.div
        className={`prompt-field ${placeholderShown ? '' : 'after:hidden'}`}
        contentEditable={true}
        role='textbox'
        aria-multiline={true}
        aria-label='Let me'
        data-placeholder='Let me do the lifting!'
        variants={promptFieldChildrenVariant}
        ref={inputField}
        onInput={handleInputChange}
        onPaste={handlePaste}
        onKeyDown={(e) => {
          // Handle case where use press 'Enter' key
          if (e.key === 'Enter' && !e.shiftKey) {
            // Submit input
            e.preventDefault();
            handleSubmit();
          }
        }}
      />
      <IconBtn
        icon='send'
        title='Submit'
        size='large'
        classes='ms-auto'
        variants={promptFieldChildrenVariant}
        onClick={handleSubmit}
      />
      <div className='state-layer'></div>
    </motion.div>
  );
};

export default PromptField;
