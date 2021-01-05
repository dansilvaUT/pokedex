import { Component } from 'react';
import Entry from './Entry';
import axios from 'axios';

class Pokedex extends Component {
    constructor() {
        super();
        this.state = {
            pokemon: []
        }
    }

    componentDidMount() {
        this.getPokemon();
    }

    getPokemon = () => {
        axios.get('/api/pokemon')
            .then(res => { this.setState({ pokemon: res.data }) })
            .catch(err => console.log(`'Error: ${err.message}`));
    }

    render() {
        return (
            <section>
                {this.state.pokemon.map(p => (
                    <Entry
                        key={p.id}
                        entry={p}
                        catchPokemon={this.props.catchPokemon}
                    />
                ))}
            </section>
        )
    }
}

export default Pokedex;