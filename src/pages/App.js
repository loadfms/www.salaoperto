import React, { Component } from 'react';
import Navbar from './../components/navbar/index';
import Home from './home/index'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <Home />
      </div>
    );
  }
}

export default App;
