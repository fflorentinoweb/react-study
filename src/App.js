




import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {  name: 'Flávio', age: '22' },
      {  name: 'Julia', age: '21' },
    ]
  }

  // state => propriedade do react que ao ter uma propriedade altera chama a funcao de render,
  // tomar cuidado ao utilizar, apenas quando necessário


  swithNameHandler = (newPerson) => {
    // set state => usado para atualizar parte do state de forma correta, atulizando aquilo foi 
    // explicito e mantendo o que nao foi alterado
    this.setState({
      persons: [
        {  name: newPerson, age: '21' },
        {  name: 'Flávio', age: '22' },
      ]
    })
  }
  // sempre declarar funcoes como a escrita acima, para evitar erros e problema com a palavra this.

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {  name: event.target.value, age: '21' },
        {  name: 'Flávio', age: '22' },
      ]
    })
  }


  /*
        // esta forma de chamar uma funcao pode ser ineficiente
        onClick={() => this.swithNameHandler('Fláviâo')}

        Preferivel usar este
        onClick={this.swithNameHandler.bind(this, 'Reference')}
  */
  render() {

    const style = {
      backgroundColor: 'gray',
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <button 
          style={style}
          onClick={() => this.swithNameHandler('Fláviâo')}>Swith name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.swithNameHandler.bind(this, 'Reference')}
          changed={this.nameChangeHandler} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} >
          <h1>Likes Flávio</h1>
        </Person>
      </div>
    );
  }
}

export default App;


// import React, { useState } from 'react';
// import './App.css';

// import Person from './Person/Person';

// const app = props => {
//   // UseState sempre retorna o estado, e funcao para atualizar o estado
//   // Podem existir mais de um useState para tratar estados separadamente
//  const [ personsState, setPersonsState ] = useState({
//     persons: [
//       {  name: 'Flávio', age: '22' },
//       {  name: 'Julia', age: '21' },
//     ],
//   });

//   const [ otherState, setOtherState ] = ('some value')

//   const swithNameHandler = () => {
//     setPersonsState({
//       persons: [
//         {  name: 'Julia', age: '21' },
//         {  name: 'Flávio', age: '22' },
//       ]
//     })
//   }

//     return (
//       <div className="App">
//         <h1>React App</h1>
//         <button onClick={swithNameHandler}>Swith name</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >
//           <h1>Likes Flávio</h1>
//         </Person>
//       </div>
//     );
//   }

// export default app;
