import React, { useState } from 'react';
import { TwitterPicker } from 'react-color';

const ColorPicker = ({changeThemeColor, themeColor}) => {
  const [toggleColorPicker, setToggleColorPicker] = useState(false);

  const handleButtonClick = () => {
    setToggleColorPicker(!toggleColorPicker);
  };

  const handleCloseColorPicker = () => {
    setToggleColorPicker(false);
  };

  const handleChooseColor = (color, e) => {
    changeThemeColor(color.hex)
  };

  const buttonStyle = {
    backgroundColor:themeColor
  }
  
  const popover = {
    position: 'absolute',
    zIndex: '2',
  };
  const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  };

  return (
    <div>
      <button onClick={handleButtonClick} style={buttonStyle}>Pick Color</button>
      {toggleColorPicker ? (
        <div style={popover}>
          <div style={cover} onClick={handleCloseColorPicker} />
          <TwitterPicker onChange={handleChooseColor}/>
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
