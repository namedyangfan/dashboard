import React from 'react';
import 'leaflet/dist/leaflet.css';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

const App = () => {
  const renderNavBar = () => (
    <nav>
      <div className='nav-wrapper blue'>
        <a href='/' className='brand-logo'>
          Demo SPA
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='https://github.com/namedyangfan/dashboard'>
              <i className='fab fa-github' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/fanyangcanada/'>
              <i className='fab fa-linkedin' />
            </a>
          </li>
          <li>
            <a href='setting'>
              <i className="fa fa-cog" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );

  return (
    <Provider store={store}>
      <div>
        {renderNavBar()}
        <Routes />
      </div>
    </Provider>

  );
};

export default App;
