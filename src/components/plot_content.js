import React from 'react'

export default class PlotContent extends React.Component {

  render() {

    return (
      <div className="section">
        the selected time interval is: {this.props.time_interval}
      </div>
    );
  }
}
