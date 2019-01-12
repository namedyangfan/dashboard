import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import Plot from 'react-plotly.js';


export default class PlotTimeSeries extends React.Component {

  renderPlotFlow = () => {
    const layout = {
      responsive: true,
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

    const data = {
      y: this.props.value,
      x: this.props.date,
      type: 'scatter',
      mode: 'lines+points',
      marker: {color: 'red'}
    }

    return(
      <Plot data = {[ data ]} layout = { layout } style = {[{width: "100%", height: "100%"}]}
        useResizeHandler = 'true'
      />
    );
  }

  render() {
    return (
      this.renderPlotFlow()
    )
  }
}
