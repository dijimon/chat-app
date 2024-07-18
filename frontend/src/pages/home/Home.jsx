import { Profiler } from 'react';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import MessageContainer from '../../components/messages/MessageContainer.jsx';

const Home = () => {
  const onRender = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    console.log('id = ', id);
    console.log('phase = ', phase);
    console.log('actualDuration = ', actualDuration);
    console.log('baseDuration = ', baseDuration);
    console.log('startTime = ', startTime);
    console.log('commitTime = ', commitTime);
  };

  return <div className="border-2 border-zinc-500
  flex
  sm:h-[450px]
  md:h-[550px]
  rounded-lg
  overflow-hidden
  bg-gray-400
  bg-clip-padding
  backdrop-filter
  backdrop-blur-lg
  bg-opacity-0"
  >
    <Profiler id="home" onRender={onRender}>
      <Sidebar />
      <MessageContainer />
    </Profiler>
  </div>;
};

export default Home;
