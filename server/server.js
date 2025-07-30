const express = require('express');
const cors = require('cors');
const users = require('./users');
const app = express();
const port = 8080;
app.use(cors());

app.get('/users', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
    // res.json({message: "Hello i am node JS.....!!!!"})
})

app.listen(port, () => {
    console.log(`Server listenig on port........!!!! ${port} `)
})