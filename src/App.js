import { Component } from 'react';
import Pokedex from './components/Pokedex';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myPokemon: []
    }
  }


  render() {
    return (
      <div className="App">
        <Pokedex />
      </div>
    );
  }
}

export default App;
