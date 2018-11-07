import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operations: ['add', 'subtract', 'multiply', 'divide']
    };
  }
  render() {
    return (
      <div className="App">
        <Routes operations={this.state.operations} />
      </div>
    );
  }
}

export default App;
