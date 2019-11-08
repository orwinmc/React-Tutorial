import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import UserDashboard from './components/UserDashboard/UserDashboard.js';

function App() {
  return (
    <div className="App">
      <center><h2>Instagram Username Table</h2></center>
      <br />
      <UserDashboard />
    </div>
  );
}

export default App;
