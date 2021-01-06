import { Component } from 'react';
import Opponent from './Opponent';
import axios from 'axios';

class Opponents extends Component {
    constructor() {
        super();
        this.state = {
            opponentPokemon: []
        }
    }

    componentDidMount() {
        this.getOpponents();
    }

    getOpponents = () => {

        for (let i = 0; i < 6; i++) {
            axios.get('/api/pokemon')
                .then(res => {
                    this.setState({ opponentPokemon: [...this.state.opponentPokemon, ...res.data] })
                })
                .catch(err => console.log(`'Error: ${err.message}`));
        }

    }

    render() {

        return (
            <section>
                <h2>Opponents</h2>
                {this.state.opponentPokemon.map((pokemon, index) => (
                    <Opponent
                        key={index}
                        pokemon={pokemon}
                    />
                ))}
            </section>
        )
    }

}

export default Opponents;