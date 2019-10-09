import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ImportantTable from './components/ImportantTable/ImportantTable.js';

const userInfo = [
  {
    firstname: 'Michael',
    lastname: 'Orwin',
    username: 'orwinmc'
  },
  {
    firstname: 'Josh',
    lastname: 'Gibson',
    username: 'gibsonjosh55'
  },
  {
    firstname: 'Sharif',
    lastname: 'Shaker',
    username: 'sharifmsha'
  },
  {
    firstname: 'Erin',
    lastname: 'Radermacher',
    username: 'erinr_8'
  },
  {
    firstname: 'Keegan',
    lastname: 'Bach',
    username: 'kbeazy'
  },
  {
    firstname: 'Connor',
    lastname: 'Bach',
    username: 'cbach120'
  },
]

function App() {
    return (
    <ImportantTable userInfo={userInfo}/>
  );
}

export default App;
