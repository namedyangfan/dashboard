import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PlotContent from './PlotContent';

const PlotContentSmart = ({
  siteNumber,
  handleChangeActiveTab,
  activeTab,
  daysInterval,
}) => {

  const [isLoading, setIsLoading] = useState(true);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [value, setValue] = useState([]);
  const [date, setDate] = useState([]);
  const [stationName, setStationName] = useState([]);

  const getPlottingData = () => {
    // parameterCd=00060: discharge in cubic feet per second
    setIsLoading(true);
    const url = `https://waterservices.usgs.gov/nwis/iv/?sites=${siteNumber}&period=P${daysInterval}D&&parameterCd=00060&format=json`;
    axios
      .get(url)
      .then((response) => {
        const { value, date, latitude, longitude, stationName } = sortValueDate(
          response
        );
        setValue(value);
        setDate(date);
        setLatitude(latitude);
        setLongitude(longitude);
        setStationName(stationName);
        setIsLoading(false);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  useEffect(
    () => {
      getPlottingData();
    },
    [siteNumber, daysInterval]
  );

  const sortValueDate = (response) => {
    const value = [];
    const date = [];
    response.data.value.timeSeries[0].values[0].value.forEach((item) => {
      value.push(item.value);
      date.push(item.dateTime);
    });

    return {
      value,
      date,
      latitude:
        response.data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation
          .latitude,
      longitude:
        response.data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation
          .longitude,
      stationName: response.data.value.timeSeries[0].sourceInfo.siteName,
    };
  };

  return (
    <PlotContent
      isLoading={isLoading}
      latitude={latitude}
      longitude={longitude}
      value={value}
      date={date}
      stationName={stationName}
      siteNumber={siteNumber}
      handleChangeActiveTab={handleChangeActiveTab}
      activeTab={activeTab}
    />
  );
};

export default PlotContentSmart;
