// Import packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = proccess.env.PORT || 8000

//Import routes
const postRoute = require('./routes/posts');


app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.send("Home post page")
});

app.use('/posts', postRoute);

// Connect ke database
mongoose.connect("mongodb+srv://razib123:razib123@cluster0.isqf8.mongodb.net/postsDB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to DB!")
})

app.listen(PORT, () => {
    console.log(`tersambung dengan port 8000`)
})
