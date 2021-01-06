const myPokemon = [];
let id = 1;


module.exports = {
    getMyPokemon: (req, res) => {
        res.status(200).send(myPokemon)
    },

    addPokemon: (req, res) => {
        const { pokemon } = req.body;
        const HP = Math.floor(Math.random() * 90);
        pokemon.id = id;
        pokemon.hp = HP;

        id++;
        myPokemon.push(pokemon);
        res.status(200).send(myPokemon);
    }
}