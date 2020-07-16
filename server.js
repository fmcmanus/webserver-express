const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'francisco mc manus'
    });
});
app.get('/about', (req, res) => {

    res.render('about.hbs', {
        nombre: 'francisco mc manus'
    });
});


app.listen(port, () => {
    console.log(`Escuchando puerto ${ port}`);
});