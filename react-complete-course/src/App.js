import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Sourabh', age: '22'},
      {name: 'Pranit', age: '23'},
      {name: 'Shreyas', age: '24'}

    ],
    otherState: 'Some other states'
  }

switchNameHandler =(newName)=> {
  //console.log("was clicked")
  this.setState({persons: [
    {name: newName, age: '22'},
    {name: 'Pranit', age: '26'},
    {name: 'Shreyas', age: '28'}

  ]})
}

nameChangedHandler = (event) =>{
  this.setState({persons: [
    {name: 'Sourabh', age: '22'},
    {name: event.target.value, age: '26'},
    {name: 'Shreyas', age: '28'}

  ]})
}


  render() {

    const style = {
     backgroundColor: 'white',
     font:'inherit',
     border: '1x solid blue',
     padding: '8px'

    }
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <button 
        style ={style}
        onClick ={() =>this.switchNameHandler('Sourabh the Great')}>Switch name
        </button>
        <Person 
        name= {this.state.persons[0].name} 
        age={this.state.persons[0].age} 
       // changed = {this.nameChangedHandler}
       />

        <Person 
        name={this.state.persons[1].name} 
        age= {this.state.persons[1].age}
        click = {this.switchNameHandler.bind(this, 'Sou!!')}
        changed = {this.nameChangedHandler}></Person>
        

        <Person 
        name = {this.state.persons[2].name} 
        age = {this.state.persons[2].age} />
      </div>
     
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does it work now'))
  }
}

export default App;
