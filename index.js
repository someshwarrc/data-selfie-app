const express = require('express');
const dataStore =   require('nedb');
 
const app = express();
const database = new dataStore('database.db');
database.loadDatabase();

app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.post('/api', (req, res) => {
    database.insert(req.body);
})

app.get('/api', (req, res) => {
    database.find({}, (err, data) => {
        if(err) res.status(400).send(err);
        res.json(data);
    })
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
