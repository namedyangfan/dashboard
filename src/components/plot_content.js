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
      date: []
    };
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps, prevState) {
        if (prevProps.site_number !== this.props.site_number) {
            this.setState({
              isLoaded: false
            }, 
            () => this.getData()
            )
        }
  }

  getData = () => {
    const url = `https://waterservices.usgs.gov/nwis/iv/?sites=${this.props.site_number}&period=P7D&format=json`
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

    this.setState({
      value: value,
      date: date
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
      <div className="section">
        the selected time interval is: {this.props.site_number}
          {this.renderPlotFlow()}
      </div>
    );
  }
}
