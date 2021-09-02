const express = require("express");
const app = express();

app.use((req, res) => {
    console.log('We got a new request');
    con
})
app.listen(8080, () => {
    console.log("Listening on port 8080!")
})