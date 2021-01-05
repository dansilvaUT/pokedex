const express = require('express'),
    app = express(),
    pkmCtr = require('./contorllers/pokemon'),
    myPkmCtr = require('./contorllers/myPokemon'),
    port = 3001;

app.use(express.json());

app.get('/api/pokemon', pkmCtr.getPokemon);


app.get('/api/my-pokemon', myPkmCtr.getMyPokemon);
app.post('/api/my-pokemon', myPkmCtr.addPokemon)


app.listen(port, () => console.log(`PokeApp listening on port: ${port}`));