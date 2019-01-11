import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
require('materialize-css/dist/js/materialize.js');
require('materialize-css/dist/css/materialize.min.css');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
