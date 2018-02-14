import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    username: 'sourabh kulkarni'
  }

  usernameChangerHandler = (event) => {
    this.setState({username: event.target.value})
  }
  render() {
    return (
      <div className="App">
      <UserInput changed ={this.usernameChangerHandler}
      currentName = {this.state.username}/>
      <UserOutput userName = {this.state.username}/>
      <UserOutput userName = {this.state.username}/>
      <UserOutput userName = "sourabh"/>

      </div>
    );
  }
}

export default App;
