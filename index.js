// Express for NodeJS..
const express = require("express"); // Requires the modules to work with the framework into this file.
const app = express(); // Executes the express


// Get Request
app.get('/cats', (req, res) => {
    res.send('Meooow!')
})

app.get('/', (req, res) => {
    res.send('This is the home page!')
})

// Post Request
app.post('/', (req, res) => {
    res.send('This is a post request!')
})

// Starts the server on port number localhost:8080
app.listen(8080, () => {
    console.log("Listening on port 8080!")
})