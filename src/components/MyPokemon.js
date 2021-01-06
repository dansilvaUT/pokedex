import { Component } from 'react';

import Pokemon from './Pokemon';

class MyPokemon extends Component {
    render() {
        return (
            <section>
                {this.props.pokemon.map((poke, index) => (
                    <Pokemon
                        key={index}
                        pokemon={poke}
                    />
                ))}
            </section>
        )
    }
}

export default MyPokemon;