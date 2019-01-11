import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export default class NavSideBar extends React.Component {

  renderGaugeStationFilter = () => {
    let options = [
      { value: '08313000', label : 'RIO GRANDE AT OTOWI BRIDGE'},
      { value: '08317200', label : 'SANTA FE RIVER ABOVE COCHITI LAKE'},
      { value: '08378500', label : 'PECOS RIVER NEAR PECOS'},
    ]

    return(
      <Dropdown options={options} onChange={this.props.handleChangeStation} value={this.props.site_number} placeholder="Select an option" />
    )
  }

  renderTimeIntervalFilter = () => {
    let options = [
      { value: '10', label : 'pass 10 days'},
      { value: '20', label : 'pass 20 days'},
      { value: '30', label : 'pass 30 days'},
    ]

    return(
      <Dropdown options={options} onChange={this.props.handleChangeDayInterval} value={this.props.days_interval} placeholder="Select an option" />
    )
  }

  render() {


    return (
        <div className="section">
          <h7> Select Gauge Station </h7>
          {this.renderGaugeStationFilter()}
          <h7> Select Duration </h7>
          {this.renderTimeIntervalFilter()}
        </div>
      );
  }
}
