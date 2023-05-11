const express = require('express')
const pokemon = require('./models/pokemon')
const { createEngine } = require('jsx-view-engine')
const app = express()
const port = 3000

app.engine('jsx',createEngine())
app.set('view engine','jsx')

app.get('/', function(req, res){
    res.render('Index', { pokemon:pokemon });
}); 


app.get('/pokemon', (req, res) => {
    res.send(pokemon);
});

app.get('/pokemon/:id', (req, res) => {
    const id = req.params.id
    res.render('Show', {singlePokemon:pokemon[req.params.id]});
});

app.listen(port,()=>
console.log('listening'))