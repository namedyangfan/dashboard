import React, { useState } from 'react';
import NavSideBar from './NavSideBar';
import PlotContentSmart from './PlotContentSmart';

const DashBoard = () => {
  const [siteNumber, setSiteNumber] = useState('08313000');
  const [daysInterval, setDaysInterval] = useState('10');
  const [activeTab, setActiveTab] = useState('Map');

  const handleChangeStation = (e) => {
    setSiteNumber(e.value);
  };

  const handleChangeDayInterval = (e) => {
    setDaysInterval(e.value);
  };

  const handleChangeActiveTab = (tabLabel) => {
    if (activeTab !== tabLabel) {
      setActiveTab(tabLabel);
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m3'>
          <NavSideBar
            siteNumber={siteNumber}
            handleChangeStation={handleChangeStation}
            daysInterval={daysInterval}
            handleChangeDayInterval={handleChangeDayInterval}
            activeTab={activeTab}
          />
        </div>
        <div className='col s12 m9'>
          <div className='card'>
            <PlotContentSmart
              siteNumber={siteNumber}
              daysInterval={daysInterval}
              activeTab={activeTab}
              handleChangeActiveTab={handleChangeActiveTab}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
