import React from 'react';

const Video = () => {
  return (
    <video
      loop
      autoPlay
      muted
      style={{
        position: 'absolute',
        width: '100%',
        left: '50%',
        top: '50%',
        height: '100%',
        objectFit: 'cover',
        transform: 'translate(-50%, -50%)',
        zIndex: '-1',
      }}
    >
      <source src={'https://gdurl.com/gQPv'} type="video/mp4" />
    </video>
  );
};

export default Video;
