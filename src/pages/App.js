import React, { Component } from 'react';
import Home from './home/index';
import Result from './searchresult/index';
import Signup from './users/signup/index';
import Signin from './users/signin/index';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/resultado" component={Result} />
          <Route exact path="/cadastro" component={Signup} />
          <Route exact path="/login" component={Signin} />
        </div>
      </Router>
    );
  }
}

export default App;
