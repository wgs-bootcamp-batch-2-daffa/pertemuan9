const express = require('express')
// const ejs = require('ejs')
const app = express()
const port = 3000
const host = 'http://localhost'
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    const tittle = 'Home'
    res.render('index', { tittle })
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/drinks/:minuman', (req, res) => {
    res.send(
        'Minuman = ' + req.params.minuman
    )
})
app.get('/drinks', (req, res) => {
    res.send(
        'Minuman = ' + req.query.drink +
        '<br><br>' +
        'Keterangan = ' + req.query.description
    )
})
app.post('/drinks', urlencodedParser, (req, res) => {
    res.send(
        'Minuman = ' + req.body.drink +
        '<br><br>' +
        'Keterangan = ' + req.body.description
    )
})
app.use('/', (req, res) => {
    res.status(404)
    res.render('error')
})
app.listen(port, () => {
    console.log(`App listen on ${host}:${port}`);
})