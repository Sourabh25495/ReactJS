import React, { Component } from 'react';
import logo from './logo.jpeg';
import './App.css';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";



import home from './routes';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
         
        <h1 className="App-title">
              <Link to="/"><img src={logo} className="App-logo" alt="logo"/></Link>
            </h1>
       
       
            <nav>
              <ul>
              <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/pokemon/page/1">Pokemon</Link>
                      </li>
                      <li>
                        <Link to="/berry/page/1">Berry</Link>
                      </li>
                      <li>
                        <Link to="/machines/page/1">Machine</Link>
                      </li>
              </ul>
            </nav>
        </header>

        <div className= "App-body">
        <Route exact path="/" component={home}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
