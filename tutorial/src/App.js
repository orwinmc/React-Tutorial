import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Badge from 'react-bootstrap/Badge';

function App() {
  return (
    <div className="App">
    <div>
      <h1>
        Example heading <Badge variant="secondary">New</Badge>
      </h1>
      <h2>
        Example heading <Badge variant="secondary">New</Badge>
      </h2>
      <h3>
        Example heading <Badge variant="secondary">New</Badge>
      </h3>
      <h4>
        Example heading <Badge variant="secondary">New</Badge>
      </h4>
      <h5>
        Example heading <Badge variant="secondary">New</Badge>
      </h5>
      <h6>
        Example heading <Badge variant="secondary">New</Badge>
      </h6>
    </div>
    </div>
  );
}

export default App;
