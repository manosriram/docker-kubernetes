const express = require("express")
const app = express()
const process = require('process')
const PORT = process.env.PORT || 5050

var counter = 0;
app.get("/", (req, res) => {
    const send = `Hits = ${counter}`
    counter++

    res.send(send)
});

app.listen(PORT, () => {
    console.log(`Server at ${PORT}`)
});
