const express = require("express");
const app = express();

app.use(() => {
    console.log('We got a new request');
})
app.listen(8080, () => {
    console.log("Listening on port 8080!")
})