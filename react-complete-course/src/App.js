import React, { Component } from 'react';
//import Radium, {StyleRoot}from 'radium'
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: "123",name: 'Sourabh', age: '22'},
      {id: "111",name: 'Pranit', age: '23'},
      {id: "122",name: 'Shreyas', age: '24'}

    ],
    otherState: 'Some other states',
    showPersons: false

  }

switchNameHandler =(newName)=> {
  //console.log("was clicked")
  this.setState({persons: [
    {name: newName, age: '22'},
    {name: 'Pranit', age: '26'},
    {name: 'Shreyas', age: '28'}

  ]})
}

nameChangedHandler = (event, id) =>{
  const personIndex = this.state.persons.findIndex(p =>{
    return p.id === id
  })

  const person ={
    ...this.state.persons[personIndex]
  }

  person.name = event.target.value

  const persons = [...this.state.persons]
  persons[personIndex]= person

  this.setState({persons: persons})
}

togglePersonsHandler = () =>{

  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow})

}

deletePersonHandler = (personIndex) =>{
  const persons = this.state.persons;
  persons.splice(personIndex, 1)
  this.setState({persons:persons})
}


  render() {

    const style = {
     backgroundColor: 'green',
     color: 'white',

     font:'inherit',
     border: '1x solid blue',
     padding: '8px',
     ':hover': {
       backgroundColor: 'lightGreen',
       color:' black'
     }

    }

     let persons = null ;
      if(this.state.showPersons){

        persons = (
          <div>
            {this.state.persons.map((person, index)=> {
              return <Person 
              click = {() => this.deletePersonHandler(index)}
              name = {person.name} 
              age = {person.age}
              key = {person.id}
              changed = {(event) =>this.nameChangedHandler(event, person.id)}/>
            })}
            
            </div>  
        );
        style.backgroundColor = 'red'

        // style[':hover'] = {
        //   backgroundColor: 'salmon',
        //   color:' black'
        // }

       
      }

      const classes= []
      if(this.state.persons.length <=2 ){
        classes.push('red')
      }
      if(this.state.persons.length <= 1){
        classes.push('bold')
      }

      //let classes = ['red', 'bold'].join(' ');//
    return (
      
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p className = {classes.join('')}>React will get you a job</p>
        <button 
        style ={style}
        onClick ={this.togglePersonsHandler}>Switch name
        </button>

          {persons}
        </div>
       
        
     
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does it work now'))
  }
}

export default App;
