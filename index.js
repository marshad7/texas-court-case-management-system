const client = require('./connection')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

client.connect();

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

app.get('/', (_req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/judges', (_req, res) => {
    client.query(`SELECT * FROM judges`, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.send(result.rows);
    });
})

app.get('/judges/:id', (req, res) => {
    client.query(`SELECT * FROM judges WHERE judges_ID = $1`, [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.send(result.rows);
    });
})

app.get('/judges/:id/sits', (req, res) => {
    client.query(`SELECT * FROM sits WHERE judges = $1`, [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.send(result.rows);
    });
})

app.get('/judges/:id/sits/court', (req, res) => {
    client.query(
        `SELECT * FROM court WHERE court_ID = (SELECT courts FROM sits WHERE judges = $1)`,
        [req.params.id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.send(result.rows);
        }
    );
})
