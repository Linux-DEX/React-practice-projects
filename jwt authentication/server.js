require('dotenv').config()

const express = require('express');
const app = express();

const jwt = require("jsonwebtoken");
app.use(express.json()); 
const posts = [
    {
        username: "sarabjeet",
        title: "post 1"
    },
    {
        username: "singh",
        title: "post 2"
    }  
]

app.get('/posts', (req, res) => {
    res.json(posts);
})

app.post('/login', (req, res) => {
    //authentication user

    const username = req.body.username;
    const user = { name: username };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })

})

function authenticateToken( req, res, nex) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
     
}

app.listen(3000)