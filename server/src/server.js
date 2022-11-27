const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const Todo = require('./models/todo')

const router = express.Router();
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(router)

const mongoURL = 'mongodb://mongo:U08u49v31GAp@infra.zeabur.com:30832'

router.route('/').get((req, res) => {
    res.send('Success')
})

router.route('/api/get').get(async (req, res) => {
    try {
        await mongoose.connect(mongoURL)

        const items = await Todo.find({})

        res.json({
            items
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: 'Error'
        })
    }
})

router.route('/api/add').post(async (req, res) => {
    try {
        await mongoose.connect(mongoURL)
        await Todo.create(req.body)

        res.json({
            message: 'Success'
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: 'Error'
        })
    }
})

router.route('/api/delete').delete(async (req, res) => {
    try {
        await mongoose.connect(mongoURL)
        await Todo.deleteOne({ _id: req.body._id })

        res.json({
            message: 'Success'
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: 'Error'
        })
    }
})

const port = process.env.PORT || 8090

app.listen(port, () => {
    console.log('Listening on port: ', port)
})