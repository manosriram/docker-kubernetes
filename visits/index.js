const express = require("express")
const app = express()
const process = require('process')
const PORT = process.env.PORT || 5050

const redis = require("redis")
const client = redis.createClient({
    host: 'redis-server' // 'redis' service name in ./docker-compose.yml
})
client.set("visits", 0)

app.get("/", (req, res) => {
    client.get("visits", (err, visits) => {
        const result = `Number of visits = ${visits}`;
        res.send(result)
        client.set("visits", parseInt(visits)+1)
    });
});

app.listen(PORT, () => {
    console.log(`Server at ${PORT}`)
});
