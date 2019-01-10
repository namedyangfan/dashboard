import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavSideBar from './components/nav_sidebar';
import PlotContent from './components/plot_content';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      time_interval : 'one'
    }
  }

  handleChangeInterval = (e) => {
    this.setState({
      time_interval : e.value
    },
    () => console.log('time_interval: ' + this.state.time_interval)
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
              <NavSideBar time_interval={this.state.time_interval} handleChangeInterval={this.handleChangeInterval}/>
            </div>
            <div className="col s8">
              <PlotContent time_interval={this.state.time_interval}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
