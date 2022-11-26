const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Success')
})

app.post('/add', (req, res) => {
    console.log(req, res)
})

const port = process.env.PORT || 8090

app.listen(port, () => {
    console.log('Listening on port: ', port)
})