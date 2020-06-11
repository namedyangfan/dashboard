import React, { useState } from 'react';
import './App.css';
import NavSideBar from './components/nav_sidebar';
import PlotContent from './components/plot_content';
import 'leaflet/dist/leaflet.css';

const App = () => {
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

  const renderNavBar = () => (
    <nav>
      <div className='nav-wrapper blue'>
        <a href='#' className='brand-logo'>
          Demo SPA
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='https://github.com/namedyangfan/dashboard'>
              <i className='fab fa-github' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/fanyangcanada/'>
              <i className='fab fa-linkedin' />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );

  return (
    <div>
      {renderNavBar()}
      <div className='container'>
        <div className='row'>
          <div className='col s12 m3'>
            <NavSideBar
              site_number={siteNumber}
              handleChangeStation={handleChangeStation}
              days_interval={daysInterval}
              handleChangeDayInterval={handleChangeDayInterval}
              activeTab={activeTab}
            />
          </div>
          <div className='col s12 m9'>
            <div className='card'>
              <PlotContent
                site_number={siteNumber}
                days_interval={daysInterval}
                activeTab={activeTab}
                handleChangeActiveTab={handleChangeActiveTab}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
