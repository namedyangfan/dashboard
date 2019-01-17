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
      <Dropdown options={options} onChange={this.props.handleChangeStation} value={this.props.site_number} placeholder="Select an option" 
        placeholderClassName='dropDownPlaceHolder' menuClassName='dropDownPlaceHolder'/>
    )
  }

  renderTimeIntervalFilter = () => {
    let options = [
      { value: '10', label : 'past 10 days'},
      { value: '20', label : 'past 20 days'},
      { value: '30', label : 'past 30 days'},
    ]

    return(
      <div>
        <h6> Select Duration </h6>
        <Dropdown options={options} onChange={this.props.handleChangeDayInterval} value={this.props.days_interval} 
        placeholder="Select an option" placeholderClassName='dropDownPlaceHolder' menuClassName='dropDownPlaceHolder'/>
      </div>
    )
  }

  render() {
    const isPlotOpen = this.props.activeTab == 'Plot'

    return (
      <div className="section">            
        <div className="row">
          <div class="col s12">
            <h6> Select Gauge Station </h6>
            {this.renderGaugeStationFilter()}
            {
              isPlotOpen?(
                this.renderTimeIntervalFilter()
              ):(
                <div/>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
