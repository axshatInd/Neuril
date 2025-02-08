/* Component */
import PageTitle from './components/PageTitle';
import TopAppBar from './components/TopAppBar';

const App = () => {
  return (
    <>
      {/* Meta Title */}
      <PageTitle title='Neuril - Chat to supercharge your ideas' />

      <div className=''>
        {/* Sidebar */}

        <div className=''>
          {/* Top app bar */}
          <TopAppBar />

          {/* Main content */}

          <div className=''>
            <div className=''></div>
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
