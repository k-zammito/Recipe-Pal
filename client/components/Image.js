import React from 'react';
import Background from '../../public/background.jpg';

const Image = () => {
  return (
    <img
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
      src={Background}
    />
  );
};

export default Image;
