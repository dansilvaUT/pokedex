require('dotenv').config();
const express = require('express'),
    app = express(),
    massive = require('massive'),
    pkmCtr = require('./contorllers/pokemon'),
    myPkmCtr = require('./contorllers/myPokemon'),
    { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());


//Connect to the database
massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log(`DB up and running!`);
}).catch(err => console.log(`Error: ${err.message}`));

app.get('/api/pokemon', pkmCtr.getPokemon);


app.get('/api/my-pokemon', myPkmCtr.getMyPokemon);
app.post('/api/my-pokemon', myPkmCtr.addPokemon)


app.listen(SERVER_PORT, () => console.log(`PokeApp listening on port: ${SERVER_PORT}`));