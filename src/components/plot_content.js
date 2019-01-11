import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import Plot from 'react-plotly.js';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

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
      station_name: null
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
    const url = `https://waterservices.usgs.gov/nwis/iv/?sites=${this.props.site_number}&period=P${this.props.days_interval}D&format=json`
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

  renderPlotFlow = () => {
    const layout = {
      responsive: true,
      width: 600,
      xaxis: {
           title: 'Date',
           titlefont: {
               family: 'Courier New, monospace',
               size: 18,
               color: '#7f7f7f'
           }
      },
      yaxis: {
           title: 'Discharge Rate ft3/s',
           automargin: true,
           titlefont: {
               family: 'Courier New, monospace',
               size: 18,
               color: '#7f7f7f'
           }
      },

      }

    return(
      <Plot
        data={[
          {
            y: this.state.value,
            x: this.state.date,
            type: 'scatter',
            mode: 'lines+points',
            marker: {color: 'red'},
          }
        ]}

        layout={ layout } 

      />
    );
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

  render() {
    return (
      this.state.isLoaded?(
        <div className="section">
          <span> Station Number: {this.props.site_number} </span>
          <div> latitude: {this.state.latitude} </div>
          <div> longitude: {this.state.longitude} </div>
            <div className="row">
              <div className="col s12">
                <div className="plotly-container">
                  {this.renderPlotFlow()}
                </div>
              </div>
              <div className="col s12">
                <div className= "section">
                  {this.renderleafletMap()}
                </div>
              </div>
            </div>
        </div>
      ):(
        <div className="col offset-s6">
          <div className="preloader-wrapper big active">
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
    )
  }
}
