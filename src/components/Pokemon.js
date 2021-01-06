const Pokemon = ({ pokemon }) => {
    return (
        <section>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.image} alt={pokemon.name} />
            <h5>HP: {pokemon.hp}</h5>
            <h5>Abilites:</h5>
            <ul>
                {pokemon.abilities.map((power, index) => (
                    <li key={index}>{power.ability.name}</li>
                ))}
            </ul>
        </section>
    )
}

export default Pokemon;