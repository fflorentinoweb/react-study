




import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Flávio', age: '22' },
      { id: 2, name: 'Julia', age: '21' },
    ],
    showPersons: false
  }

  deletePerson = (personIndex) => {
    // const persons = this.state.persons.slice();
    // .slice() creates a copy of de object not a pointer, like the spread operator ....
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({
      persons: persons
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {

    const style = {
      backgroundColor: 'gray',
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={this.deletePerson.bind(this, person)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangeHandler(event, person.id)}
                key={person.id} />
              // key => atributo para o react reconhecer os elementos da lista e renderizar 
              // apenas os itens realmente alterados
            )
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}

      </div>
    );
  }
}

export default App;
