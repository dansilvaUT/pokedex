const Entry = ({ entry }) => {
    console.log(entry)
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
            <button>Catch Pokemon</button>
        </section>
    )
}

export default Entry;