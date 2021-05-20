const cors = require('cors');

const express = require('express');
const app = express();
const port = 3001

const testdb = require('./testdb')

app.use(cors())

app.use(express.json())
/*
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Origin', 'https://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
})
*/
app.get('/', (req,res) => {
    testdb.getUsers()
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

app.post('/users', (req,res) => {
    console.log(req.query)
    testdb.createUser(req.query)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

app.get('/user/:user_id', (req, res) => {
    testdb.selectUser(req.params.user_id)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

app.delete('/users/:user_id', (req, res) => {
    testdb.deleteUser(req.params.user_id)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

app.post('/comment', (req,res) => {
    console.log(req.body)
    testdb.createPost(req.body)
    .then(response => {
        res.status(200).send({success: true});
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

app.get('/comments', (req,res) => {
    testdb.getPosts()
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
})

app.listen(port, () => {
    console.log('live')
})
