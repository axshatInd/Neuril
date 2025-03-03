/* Node Modules */
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import {
  Outlet,
  useParams,
  useNavigation,
  useActionData,
} from 'react-router-dom';

/* Custom hooks */
import { useToggle } from './hooks/useToggle';
import { useSnackbar } from './hooks/useSnackbar';
import { usePromptPreloader } from './hooks/userPromptPreloader';

/* Component */
import PageTitle from './components/PageTitle';
import TopAppBar from './components/TopAppBar';
import Sidebar from './components/Sidebar';
import Greetings from './pages/Greetings';
import PromptField from './components/PromptField';

const App = () => {
  // Get the URL parameters
  const params = useParams();

  // Access the navigation state.
  const navigation = useNavigation();

  // Get the data passed from a form action.
  const actionData = useActionData();

  /* Create a reference to an HTML element,
   * likely used to interact with the chat history. */
  const chatHistoryRef = useRef();

  /* use a custom hook to manage the sidebar's open state.
   * 'isSidebarOpen' holds the current state,
   * and 'toggleSidebar' is a function to toggle the sidebar
   */

  const [isSidebarOpen, toggleSidebar] = useToggle();

  /* Access the prompt preloader state,
   * particularly the value for prompt preloading. */
  const { promptPreloaderValue } = usePromptPreloader();

  const { showSnackbar } = useSnackbar();

  /* This useEffect hook is triggered whenever the 'promptPreloaderValue' or 'chatHistoryRef' changes.
   * Inside the hook, we get the current HTML element referenced by 'chatHistoryRef'.
   * Then, we check if 'promptPreloaderValue' is true, indicating that a new message is being loaded.
   * If it's true, we smoothly scroll the chat history to the bottom.
   * This ensures that the latest message is always visible after loading new content.  */
  useEffect(() => {
    const chatHistory = chatHistoryRef.current;
    if (promptPreloaderValue) {
      chatHistory.scroll({
        top: chatHistory.scrollHeight - chatHistory.clientHeight,
        behavior: 'smooth',
      });
    }
  }, [chatHistoryRef, promptPreloaderValue]);

  // show snackbar after deleting a conversation
  useEffect(() => {
    if (actionData?.conversationTitle) {
      showSnackbar({
        message: `Deleted '${actionData.conversationTitle}' conversation.`,
      });
    }
  }, [actionData, showSnackbar]);

  /* Check if the current navigation state is 'loading' and if there is no form data associated
  with the navigation.
  * This condition typically signifies a normal page load, where the page is loading for the first time or is
  being reloaded without submitting a form. 
   */
  const isNormalLoad = navigation.state === 'loading' && !navigation.formData;
  return (
    <>
      {/* Meta Title */}
      <PageTitle title='Neuril - Chat to supercharge your ideas' />

      <div className='lg:grid lg:grid-cols-[320px,1fr]'>
        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        <div className='h-dvh grid grid-rows-[max-content,minmax(0,1fr),max-content]'>
          {/* Top app bar */}
          <TopAppBar toggleSidebar={toggleSidebar} />

          {/* Main content */}

          <div
            ref={chatHistoryRef}
            className='px-5 pb-5 flex flex-col overflow-y-auto'
          >
            <div className='max-w-[840px] w-full mx-auto grow'>
              {isNormalLoad ? null : params.conversationId ? (
                <Outlet /> //Conversation
              ) : (
                <Greetings />
              )}
            </div>
          </div>

          {/* Prompt field */}
          <div className='bg-light-background dark:bg-dark-background'>
            <div className='max-w-[870px] px-5 w-full mx-auto'>
              <PromptField />
              <motion.p
                initial={{ opacity: 0, translateY: '-4px' }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.2, delay: 0.8, ease: 'easeOut' }}
                className='text-bodySmall text-center text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant p-3'
              >
                Neuril can make mistakes, check important info.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
