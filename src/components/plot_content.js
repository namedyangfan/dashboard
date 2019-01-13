import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import Plot from 'react-plotly.js';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import PlotTimeSeries from './plot_time_series'
import classNames from 'classnames'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class Tab extends React.Component {
  render(){
    const tabLabel = this.props.tabLabel
    const className = classNames (
      {
        'grey-text' : tabLabel !== this.props.activeTab,
        'active-tab': tabLabel == this.props.activeTab,
        'blue-text text-lighten-2': tabLabel == this.props.activeTab
      }
    )

    return (
      <li className='tab col s3 offset-s1' onClick={() => {this.props.onClick(tabLabel)}}> 
        <a className={className}>
          <i className={this.props.labelClass} style={{font : 15}}></i>
          <span style={{marginLeft : 10}}>{tabLabel}</span>
        </a>
      </li>
    )
  }
}

export default class PlotContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      value: [],
      date: [],
      latitude: null,
      longitude: null,
      zoom: 13,
      station_name: null,
    };
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps, prevState) {
        if (prevProps.site_number !== this.props.site_number || prevProps.days_interval !== this.props.days_interval) {
            this.setState({
              isLoaded: false
            }, 
            () => this.getData()
            )
        }
  }

  getData = () => {
    // parameterCd=00060: discharge in cubic feet per second
    const url = `https://waterservices.usgs.gov/nwis/iv/?sites=${this.props.site_number}&period=P${this.props.days_interval}D&&parameterCd=00060&format=json`
    axios.get(url)
      .then( (response) => {
        // handle success
        this.sortValueDate(response)
        this.setState({
          isLoaded: true
        })
      })
      .catch( (error) => {
        // handle error
        console.log(error);
      })
  }

  sortValueDate = (response) => {
    // console.log( response.data.value.timeSeries[0].values[0].value )

    const data = response.data.value.timeSeries[0].values[0].value 

    const value = _.map(data, 'value')
    const date = _.map(data, 'dateTime')
    console.log(response.data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation)
    this.setState({
      value: value,
      date: date,
      latitude: response.data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.latitude,
      longitude: response.data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.longitude,
      station_name: response.data.value.timeSeries[0].sourceInfo.siteName
    })
  }

  renderleafletMap = () => {
    const position = [this.state.latitude, this.state.longitude]
    // const position = [51.1, -0.09]

    return (
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              <span>Station: {this.state.station_name}</span>
            </Popup>
          </Marker>
        </Map>
    )

  }

  renderContent = () => {
    
    if (this.props.activeTab == 'Map') {
      return(
        <div className="col s12">
          <div className= "section">
            <span> Station Number: {this.props.site_number} </span>
            <span> Latitude: {this.state.latitude} </span>
            <span> Longitude: {this.state.longitude} </span>
            {this.renderleafletMap()}
          </div>
        </div>
      )
    }
    return (
      <div className="col s12">
        <div className="plotly-container">

          <PlotTimeSeries value={this.state.value} date={this.state.date}/>        
        </div>
      </div>
    )
  }

  render() {
    return (
        <div className="section">
            <div className="row">
              <div class="col s12">
                <ul className="tabs">
                  <Tab tabLabel="Map" onClick={this.props.handleChangeActiveTab} activeTab={this.props.activeTab} labelClass="fas fa-globe-americas fa-lg"/>
                  <Tab tabLabel="Plot" onClick={this.props.handleChangeActiveTab} activeTab={this.props.activeTab} labelClass="fas fa-chart-line fa-lg"/>
                </ul>
              </div>
              {this.state.isLoaded?(
                this.renderContent()
               ):(
                <div className="col 12 offset-s7 loader">
                  <div className="preloader-wrapper big active ">
                    <div className="spinner-layer spinner-blue-only">
                      <div className="circle-clipper left">
                        <div className="circle"></div>
                      </div><div className="gap-patch">
                        <div className="circle"></div>
                      </div><div className="circle-clipper right">
                        <div className="circle"></div>
                      </div>
                    </div>
                  </div>
                </div>
               )
              }
            </div>
        </div>
    )
  }
}
