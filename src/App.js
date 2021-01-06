import { Component } from 'react';
import Pokedex from './components/Pokedex';
import MyPokemon from './components/MyPokemon';
import Opponent from './components/Opponent';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myPokemon: [],
      opponentPokemon: []
    }
  }

  componentDidMount() {
    this.getMyPokemon();
  }

  catchPokemon = pokemon => {
    axios.post('/api/my-pokemon', { pokemon: pokemon })
      .then(res => this.setState({ myPokemon: res.data }))
      .catch(err => console.log(`Error: ${err.message}`));
  }

  getMyPokemon = () => {
    axios.get('/api/my-pokemon')
      .then(res => this.setState({ myPokemon: res.data }))
      .catch(err => console.log(`Error: ${err.message}`));
  }

  render() {
    return (
      <div className="App">
        <Pokedex catchPokemon={this.catchPokemon} />
        <MyPokemon
          pokemon={this.state.myPokemon}
        />
        <Opponent 
          opponentPokemon={this.state.Pokemon}
        />
      </div>
    );
  }
}

export default App;
