const express = require('express')
const index = express()
const port = 3000

index.get('/', (req, res) => {
    res.send("hello from NODE")
})

index.listen(port, () => {
    console.log(`Node-app running in http://localhost:${port}/`)
})