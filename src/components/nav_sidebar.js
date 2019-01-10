import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export default class NavSideBar extends React.Component {

  renderTimeInterval = () => {
    const options = [
      'one', 'two', 'three'
    ]

    const defaultOption = this.props.time_interval

    return(
      <Dropdown options={options} onChange={this.props.handleChangeInterval} value={defaultOption} placeholder="Select an option" />
    )
  }

  render() {


    return (
      <ul className="sidenav sidenav-fixed" style={{top:'auto'}}>
        <li>
          {this.renderTimeInterval()}
        </li>
      </ul>
      );
  }
}
