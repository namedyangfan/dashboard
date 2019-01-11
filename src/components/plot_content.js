import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import Plot from 'react-plotly.js';

export default class PlotContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      value: [],
      date: [],
      latitude: null,
      longitude: null
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
      longitude: response.data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.longitude
    })
  }

  renderPlotFlow = () => {

    return(
      <Plot
        data={[
          {
            y: this.state.value,
            x: this.state.date,
            type: 'scatter',
            mode: 'lines+points',
            marker: {color: 'red'},
          },
        ]}
        layout={ {width: 700, height: 500, title: 'A Fancy Plot'} }
      />
    );
  }


  render() {
    return (
      this.state.isLoaded?(
        <div className="section">
          <span> the selected station number is: {this.props.site_number} </span>
          <div> latitude: {this.state.latitude} </div>
          <div> longitude: {this.state.longitude} </div>
            {this.renderPlotFlow()}
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
