import React, { useState, useRef } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import Portal from './portal';
import HandleOutsideClick from '../../common/HandleOutideClick'

const HelpBar = ({ handleHelpButtonClick, helpMsg }) => {
  const ref = useRef();
  HandleOutsideClick(ref, handleHelpButtonClick);

  return (
    <nav className='potal-container blue darken-4'>
      <div className='nav-wrapper ' ref={ref}>
        <ul>
          <i className='far fa-lightbulb' />
          <span>{helpMsg}</span>
        </ul>
      </div>
    </nav>
  );
};

const NavSideBar = ({
  handleChangeStation,
  handleChangeDayInterval,
  siteNumber,
  daysInterval,
  activeTab,
}) => {
  const [toolTipOpen, setToolTipOpen] = useState(false);
  const isPlotOpen = activeTab === 'Plot';
  const gaugeStationHelpMsg =
    ' Gauge station is used to monitor and test terrestrial bodies of water ';
  const handleHelpButtonClick = () => {
    setToolTipOpen(!toolTipOpen);
  };

  const renderGaugeStationFilter = () => {
    const options = [
      { value: '08313000', label: 'RIO GRANDE AT OTOWI BRIDGE' },
      { value: '08317200', label: 'SANTA FE RIVER ABOVE COCHITI LAKE' },
      { value: '08378500', label: 'PECOS RIVER NEAR PECOS' },
    ];

    return (
      <Dropdown
        options={options}
        onChange={handleChangeStation}
        value={siteNumber}
        placeholder='Select an option'
        placeholderClassName='dropDownPlaceHolder'
        menuClassName='dropDownPlaceHolder'
      />
    );
  };

  const renderTimeIntervalFilter = () => {
    const options = [
      { value: '10', label: 'past 10 days' },
      { value: '20', label: 'past 20 days' },
      { value: '30', label: 'past 30 days' },
    ];

    return (
      <div>
        <h6> Select Duration </h6>
        <Dropdown
          options={options}
          onChange={handleChangeDayInterval}
          value={daysInterval}
          placeholder='Select an option'
          placeholderClassName='dropDownPlaceHolder'
          menuClassName='dropDownPlaceHolder'
        />
      </div>
    );
  };

  return (
    <div className='section'>
      <div className='row'>
        <div class='col s12'>
          <h6>
            Select Gauge Station
            <a className='tooltip-button' style={{ marginLeft: 10 }}>
              <i
                className='far fa-question-circle'
                onClick={handleHelpButtonClick}
              />
              {toolTipOpen ? (
                <Portal>
                  <HelpBar
                    handleHelpButtonClick={handleHelpButtonClick}
                    helpMsg={gaugeStationHelpMsg}
                  />
                </Portal>
              ) : null}
            </a>
          </h6>
          {renderGaugeStationFilter()}
          {isPlotOpen ? renderTimeIntervalFilter() : null}
        </div>
      </div>
    </div>
  );
};

export default NavSideBar;
