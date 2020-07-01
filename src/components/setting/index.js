import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ColorPicker from './ColorPicker'
import {changeThemeColor, resetThemeColor} from './action'

const Setting = () => {
  const themeColor = useSelector(state => state.settings.themeColor);
  const dispatch = useDispatch()

  return (
    <div>
      <div className='container'>
        <div className='card'>
          <ColorPicker themeColor={themeColor} changeThemeColor={(color)=>dispatch(changeThemeColor(color))}/>
        </div>
      </div>
    </div>
  );
};

export default Setting