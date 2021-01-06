const axios = require('axios');

module.exports = {
    getPokemon: (req, res) => {
        const pokemon = [];
        const number = Math.floor(Math.random() * 899);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`)
            .then(response => {
                pokemon.push(response.data)
                res.status(200).send(pokemon);
            })
            .catch(err => console.log(`Error: ${err.message}`));
        //TODO get opponent pokemon too

    }
}