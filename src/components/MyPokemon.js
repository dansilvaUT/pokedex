import {Component} from 'react';

class MyPokemon extends Component {
    render(){
        return(
            <section>
                {this.props.pokemon.map((poke, index)=>(
                    <section key={index}>
                        <div>{poke.name}</div>
                        <img src={poke.image} alt={poke.name}/>
                    </section>
                ))}
            </section>
        )
    }
}

export default MyPokemon;