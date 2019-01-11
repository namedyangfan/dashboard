import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavSideBar from './components/nav_sidebar';
import PlotContent from './components/plot_content';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      site_number : '08313000',
      days_interval : '10'
    }
  }

  handleChangeStation = (e) => {
    console.log(e)
    this.setState({
      site_number : e.value
    },
    () => console.log('site_number: ' + this.state.site_number)
    )

  }


  handleChangeDayInterval = (e) => {
    console.log(e)
    this.setState({
      days_interval : e.value
    },
    () => console.log('days_interval: ' + this.state.days_interval)
    )

  }

  renderNavBar = () =>{
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    )
  }

  render() {
    return (
      <div>
        {this.renderNavBar()}
        <div className="container">
          <div className="row">
            <div className="col s4">
              <NavSideBar site_number={this.state.site_number} handleChangeStation={this.handleChangeStation} days_interval={this.state.days_interval}
                handleChangeDayInterval={this.handleChangeDayInterval}/>
            </div>
            <div className="col s8">
              <PlotContent site_number={this.state.site_number} days_interval={this.state.days_interval}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
