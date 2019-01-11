import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export default class NavSideBar extends React.Component {

  renderTimeInterval = () => {
    const options = [
      { value: '08313000', label : 'RIO GRANDE AT OTOWI BRIDGE'},
      { value: '08317200', label : 'SANTA FE RIVER ABOVE COCHITI LAKE'},
      { value: '08378500', label : 'PECOS RIVER NEAR PECOS'},

    ]

    const defaultOption = this.props.site_number

    return(
      <Dropdown options={options} onChange={this.props.handleChangeInterval} value={defaultOption} placeholder="Select an option" />
    )
  }

  render() {


    return (
        <div className="section">
          <h7> Select Gauge Station </h7>
          {this.renderTimeInterval()}
        </div>
      );
  }
}
