import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Portal from './portal'

class HelpButton extends React.Component {
  componentWillMount = () => {
    document.addEventListener('click', this.props.handleHelpButtonOutsideClick, false);
  }
  componentWillUnmount = () => {
    document.removeEventListener('click', this.props.handleHelpButtonOutsideClick, false);

  }

  render(){
    return(
      <i className="far fa-question-circle" onClick={this.props.handleHelpButtonClick}></i>
    )
  }
}

export default class NavSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toolTipOpen:false
    };
  }

  handleHelpButtonClick = () => {
    this.setState({
      toolTipOpen: !this.state.toolTipOpen
    })
  }

  handleHelpButtonOutsideClick = (e) => {
    if(!this.node.contains(e.target))
      this.setState({ toolTipOpen: false })
  }

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
          <div class="col s12" ref={(node) => { this.node = node; }}>
            <h6> 
              Select Gauge Station 
              <a className="tooltip-button" style={{marginLeft : 10}}>
                <HelpButton handleHelpButtonClick={this.handleHelpButtonClick} handleHelpButtonOutsideClick={this.handleHelpButtonOutsideClick}/>
                {
                  this.state.toolTipOpen?(
                  <Portal>
                    <nav className="potal-container blue darken-4">
                      <div className="nav-wrapper ">
                          <ul>
                              <i className="far fa-lightbulb"></i>
                              <span> Gauge station is used to monitor and test terrestrial bodies of water. </span>
                          </ul>
                      </div>
                    </nav>
                  </Portal> 
                  ):(
                    null
                  )
                }
              </a>
            </h6>
            {this.renderGaugeStationFilter()}
            {
              isPlotOpen?(
                this.renderTimeIntervalFilter()
              ):(
                null
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
