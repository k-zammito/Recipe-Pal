import React from 'react';
import Navbar from './components/Navbar';
import Routes from './Routes';
import Video from './components/Video';
import Image from './components/Image';

const App = () => {
  return (
    <div>
      {/* <Video /> */}
      <Image />
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
