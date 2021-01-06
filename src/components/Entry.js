import { Component } from 'react';

class Entry extends Component {

    addPokemon = () => {
        const { entry, catchPokemon } = this.props;
        const pokemon = {
            name: entry.name,
            image: entry.sprites.front_default,
            abilities: entry.abilities
        }
        catchPokemon(pokemon);
    }
    render() {
        const { entry } = this.props;
        return (
            <section>
                <h2>Name: {entry.name}</h2>
                <img src={entry.sprites.front_default} alt={entry.name} />
                <h4>Abilities: </h4>
                <ul>
                    {entry.abilities.map((power, index) => (
                        <li key={index}>{power.ability.name}</li>
                    ))}
                </ul>
                <button onClick={() => this.addPokemon()}>Catch Pokemon</button>
            </section>
        )
    }

}

export default Entry;