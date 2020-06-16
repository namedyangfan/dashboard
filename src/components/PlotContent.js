import React from 'react';
import L from 'leaflet';
import classNames from 'classnames';

import PlotTimeSeries from './plot_time_series';
import PlotMap from './plotMap';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Tab = ({ tabLabel, activeTab, onClick, labelClass }) => {
  const className = classNames({
    'grey-text': tabLabel !== activeTab,
    'active-tab': tabLabel === activeTab,
    'blue-text text-lighten-2': tabLabel === activeTab,
  });

  return (
    <li className='tab col s3 offset-s1' onClick={()=>onClick(tabLabel)}>
      <a className={className}>
        <i className={labelClass} style={{ font: 15 }} />
        <span style={{ marginLeft: 10 }}>{tabLabel}</span>
      </a>
    </li>
  );
};

const PlotContent = ({
  isLoading,
  latitude,
  longitude,
  value,
  date,
  stationName,
  siteNumber,
  handleChangeActiveTab,
  activeTab,
}) => {
  const renderContent = () => {
    if (activeTab === 'Map') {
      return (
        <PlotMap
          latitude={latitude}
          longitude={longitude}
          stationName={stationName}
          siteNumber={siteNumber}
        />
      );
    } else {
      return (
        <div className='col s12'>
          <div className='plotly-container'>
            <PlotTimeSeries value={value} date={date} />
          </div>
        </div>
      );
    }
  };

  return (
    <div className='section'>
      <div className='row'>
        <div class='col s12'>
          <ul className='tabs'>
            <Tab
              tabLabel='Map'
              onClick={handleChangeActiveTab}
              activeTab={activeTab}
              labelClass='fas fa-globe-americas fa-lg'
            />
            <Tab
              tabLabel='Plot'
              onClick={handleChangeActiveTab}
              activeTab={activeTab}
              labelClass='fas fa-chart-line fa-lg'
            />
          </ul>
        </div>
        {isLoading ? (
          <div className='col 12 offset-s7 loader'>
            <div className='preloader-wrapper big active '>
              <div className='spinner-layer spinner-blue-only'>
                <div className='circle-clipper left'>
                  <div className='circle' />
                </div>
                <div className='gap-patch'>
                  <div className='circle' />
                </div>
                <div className='circle-clipper right'>
                  <div className='circle' />
                </div>
              </div>
            </div>
          </div>
        ) : (
          renderContent()
        )}
      </div>
    </div>
  );
};

export default PlotContent;
