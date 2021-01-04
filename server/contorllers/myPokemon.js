const myPokemon = [];
let id = 1;

module.exports = {
    getMyPokemon: (req, res) => {
        res.status(200).send(myPokemon)
    },

    addPokemon: (req, res) => {
        const { pokemon } = req.body;
        pokemon.id = id;

        id++;
        myPokemon.push(pokemon);
        res.status(200).send(myPokemon);
    }
}