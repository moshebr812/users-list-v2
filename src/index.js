// FILE:   index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(
  // relace line <App></App> with the React.createElement line
  // React.createElement("div", undefined,"Tesing my connection"),
  <App></App>, 
  document.getElementById('root')
);
