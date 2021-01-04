const axios = require('axios');

module.exports = {
    getPokemon: (req, res) => {
        const pokemon = [];
        let number = Math.floor(Math.random() * 1) + 898;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`)
            .then(response => {
                pokemon.push(response.data)
                res.status(200).send(pokemon);
            })
            .catch(err => console.log(`Error: ${err.message}`));


    }
}