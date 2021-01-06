import { Component } from 'react';
import Opponent from './Opponent';
import axios from 'axios';

class Opponents extends Component {
    constructor() {
        super();
        this.state = {
            yourPokemon: []
        }
    }

    componentDidMount() {
        this.getMyPokemon();
    }

    getMyPokemon = () => {
        axios.get('/api/pokemon')
            .then(res => { this.setState({ yourPokemon: res.data }) })
            .catch(err => console.log(`'Error: ${err.message}`));
    }

    render() {
        console.log("opponents", this.state.yourPokemon)
        return (
            <section>
                {this.state.yourPokemon.map((pokemon, index) => (
                    <Opponent key={index} pokemon={pokemon} />
                ))}
            </section>
        )
    }

}

export default Opponents;