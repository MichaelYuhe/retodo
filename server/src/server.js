const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const Todo = require('./models/todo')

const router = express.Router();
const app = express()
app.use(cors())
app.use(router)

const mongoURL = 'mongodb://mongo:U08u49v31GAp@infra.zeabur.com:30832'

router.route('/').get((req, res) => {
    res.send('Success')
})

router.route('/get').get(async (req, res) => {
    try {
        await mongoose.connect(mongoURL)

        const items = await Todo.find({})

        res.json({
            items
        })
    } catch (error) {
        console.log(error)
    }
})

router.route('/add').post(async (req, res) => {
    try {
        console.log(req)
        await mongoose.connect(mongoURL)
    } catch (error) {
        console.log(error)
    }
})

const port = process.env.PORT || 8090

app.listen(port, () => {
    console.log('Listening on port: ', port)
})