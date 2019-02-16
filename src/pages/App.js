import React, { Component } from 'react';
import Navbar from './../components/navbar/index';
import Home from './home/index'
import Result from './searchresult/index'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route path="/resultado" component={Result} />
        </div>
      </Router>
    );
  }
}

export default App;
