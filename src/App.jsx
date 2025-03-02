/* Custom hooks */
import { useToggle } from './hooks/useToggle';

/* Component */
import PageTitle from './components/PageTitle';
import TopAppBar from './components/TopAppBar';
import Sidebar from './components/Sidebar';

const App = () => {
  /* use a custom hook to manage the sidebar's open state.
   * 'isSidebarOpen' holds the current state,
   * and 'toggleSidebar' is a function to toggle the sidebar
   */

  const [isSidebarOpen, toggleSidebar] = useToggle();
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

          <div className='px-5 pb-5 flex flex-col overflow-y-auto'>
            <div className='max-w-[840px] w-full mx-auto grow'>
              Main Content
            </div>
          </div>

          {/* Prompt field */}
          <div className=''>
            <p className=''>
              Neuril may display inaccurate info. Check important info.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
