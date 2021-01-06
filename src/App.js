import { Component } from 'react';
import Pokedex from './components/Pokedex';
import MyPokemon from './components/MyPokemon';
import Opponents from './components/Opponents';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      myPokemon: []
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
    console.log('opponents:', this.state.opponentPokemon);
    return (
      <div className="App">
        <Pokedex catchPokemon={this.catchPokemon} />
        <MyPokemon
          pokemon={this.state.myPokemon}
        />
        <Opponents />
      </div>
    );
  }
}

export default App;
