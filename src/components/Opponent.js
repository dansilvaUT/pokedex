import { Component } from 'react';
//import OpponentPokemon from './OpponentPokemon';
import axios from 'axios';

class Opponent extends Component {
    constructor() {
        super();
        this.state = {
            opponentPokemon: []
        }
    }


    componentDidMount() {
        this.getSomePokemon();
    }

    getSomePokemon = () => {
        for (let i = 6; i > this.state.opponentPokemon.length; i--) {
            const number = Math.floor(Math.random() * 899);
            axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`)
                .then(res => this.setState({ opponentPokemon: res.data }))
                .catch(err => console.log(`Error: ${err.message}`))
        }
    }

    render() {
        console.log(this.state.opponentPokemon)
        console.log(this.state.opponentPokemon.length)
        return (
            <section>


            </section>
        )
    }
}

export default Opponent;