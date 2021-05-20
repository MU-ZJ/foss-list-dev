const cors = require('cors');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001

const testdb = require('./testdb')

app.use(cors())

app.use(express.json())

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

app.listen(PORT, () => {
    console.log('live')
})
