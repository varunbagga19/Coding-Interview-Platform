import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Notifications from './components/Notification/Notifications';
import Options from './components/Options/Options';
import Compiler from './components/Compiler/Compiler';
import { ContextProvider } from './Context';
// import Qu from './Qu.js';
import './App.css';
import './index.css'
function ExApp() {
  return (
    <ContextProvider>
    <div className='main'>
      <div className='left'>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
      <div className='right'> 
    
      {/* <Qu />    */}
        <Compiler />
       </div>
    </div>
    </ContextProvider>
  );
}

export default ExApp;
