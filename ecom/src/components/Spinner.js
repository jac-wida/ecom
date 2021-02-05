import React from 'react';
import Loader from 'react-loader-spinner';

const Spinnner = () => {
  return (
    <Loader
      type='ThreeDots'
      color='#00BFFF'
      height={100}
      width={100}
      // timeout={3000}
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
      }}
    />
  );
};
export default Spinnner;
