import React from 'react';
import { TwitterPicker } from 'react-color';

import ColorPicker from './ColorPicker'

const Setting = () => {
  return (
    <div>
      <div className='container'>
        <div className='card'>
          <ColorPicker />
        </div>
      </div>
    </div>
  );
};

export default Setting