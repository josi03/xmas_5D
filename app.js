var express = require('express');
var path = require('path');
var app = express();
app.get('/api', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json'); //specifico che invio dati JSON
    res.send(JSON.stringify([
        {'nome': 'Carlo', 'cognome': 'Rossi'},
        {'nome': 'Luca', 'cognome': 'Bianchi'},
        {'nome': 'Marco', 'cognome': 'Verdi'},
        {'nome': 'Giampaolo', 'cognome': 'Gialli'}
    ]))
});
app.get('/catch', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json'); //specifico che invio dati JSON
    res.send(JSON.stringify([
        {'nome': 'Paolo', 'eta': 5},
        {'nome': 'Giacomo', 'eta': 12},
        {'nome': 'Lucia', 'eta': 3},
        {'nome': 'Martina', 'eta': 19}
    ]))
});
app.get('/nope', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json'); //specifico che invio dati JSON
    res.send(JSON.stringify([
        {'esito': 'bad request', 'codice': 400},
        {'esito': 'unauthorized ', 'codice': 401},
        {'esito': 'forbidden ', 'codice': 403},
        {'esito': 'not found', 'codice': 404}
    ]))
});
app.listen(3000, function() {
    console.log("OK");
});