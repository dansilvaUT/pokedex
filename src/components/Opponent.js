
const Opponent = props => {
    return (
        <section>
            <h2>Opponents</h2>
            <section>
                <h3>{props.pokemon.name}</h3>
                <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name} />
                <ul>
                    {props.pokemon.abilities.map((power, index) => (
                        <li key={index}>{power.ability.name}</li>
                    ))}
                </ul>
            </section>
        </section>
    )
}

export default Opponent;