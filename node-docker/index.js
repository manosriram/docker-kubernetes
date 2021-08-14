const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;
var count = 0

app.get("/", (req, res) => {
    const str = `Server running at PORT = ${PORT} and count = ${count}`;
    ++count
    console.log("hit")
    res.send(str)
});

app.listen(PORT, () => {
    console.log(`Server at ${PORT}`);
});
