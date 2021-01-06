const Opponent = props => {
    const HP = Math.floor(Math.random() * 90);
    return (
        <section>

            <section>
                <h3>{props.pokemon.name}</h3>
                <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name} />
                <p>{HP}</p>
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