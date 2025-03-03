/* Node modules */
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { hopscotch, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState, useEffect, useCallback } from 'react';

/* Custom Modules */
import toTitleCase from '../utils/toTitleCase';

/* Custom hooks */
import { useSnackbar } from '../hooks/useSnackbar';

/* Components */
import { IconBtn } from './Button';

/* Assets */
import { iconLogo } from '../assets/assets';

const AiResponse = ({ aiResponse, children }) => {
  //Initialize the codeTheme state to an empty string, this will be used to store the selected code theme.
  const [codeTheme, setCodeTheme] = useState('');

  const { showSnackbar, hideSnackbar } = useSnackbar();

  // Use useEffect to detect changes in the user's preferred color scheme.

  useEffect(() => {
    // Create a media query to detect the user's preferred color scheme.
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Initially set the colorTheme based on the current media query result.
    setCodeTheme(mediaQuery.matches ? hopscotch : coy);

    // Create an event listener to handle changes in the preferred color scheme.
    const themeListener = mediaQuery.addEventListener('change', (event) => {
      setCodeTheme(event.matches ? hopscotch : coy);
    });

    // Cleanup function to remove the event listener when the component unmounts.
    return () => mediaQuery.removeEventListener('change', themeListener);
  }, []);

  const handleCopy = useCallback(
    async (text) => {
      hideSnackbar();
      try {
        await navigator.clipboard.writeText(text);
        showSnackbar({
          message: 'Copied to clipboard',
          timeOut: 2500,
        });
      } catch (err) {
        showSnackbar({ message: err.message });
        console.log(`Error copying text to clipboard: ${err.message}`);
      }
    },
    [showSnackbar, hideSnackbar],
  );

  // This function will execute for every code tag
  const code = ({ children, className, ...rest }) => {
    const match = className?.match(/language-(\w+)/);

    return match ? (
      <>
        <div className='code-block'>
          <div className='p-4 pb-0 font-sans'>{toTitleCase(match[1])}</div>
          <SyntaxHighlighter
            {...rest}
            PreTag='div'
            language={match[1]}
            style={codeTheme}
            customStyle={{
              marginBlock: '0',
              padding: '2px',
            }}
            codeTagProps={{
              style: {
                padding: '14px',
                fontWeight: '600',
              },
            }}
          >
            {children}
          </SyntaxHighlighter>
        </div>

        <div className='bg-light-surfaceContainer dark:bg-dark-surfaceContainer rounded-t-extraSmall rounded-b-medium flex justify-between items-center h-11 font-sans text-bodyMedium ps-4 pe-2'>
          <IconBtn
            icon='content_copy'
            size='small'
            title='Copy code'
            onClick={handleCopy.bind(null, children)}
          ></IconBtn>
        </div>
      </>
    ) : (
      <code className={className}>{children}</code>
    );
  };
  return (
    <div className='grid grid-cols-1 items-start gap-1 py-4 md:grid-cols-[max-content,minmax(0,1fr)] md:gap-5'>
      <figure className='w-8 h-8 grid place-items-center'>
        <img
          src={iconLogo}
          width={48}
          height={48}
          alt='Neuril Logo'
        />
      </figure>

      {children}
      <div className='markdown-content'>
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{ code }}
        >
          {aiResponse}
        </Markdown>
      </div>
    </div>
  );
};

AiResponse.propTypes = {
  aiResponse: PropTypes.string,
  children: PropTypes.any,
};

export default AiResponse;
