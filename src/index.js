const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes')
const app = express()

app.use(express.json())

mongoose.set('strictQuery', false)

mongoose.connect("mongodb+srv://nnsahu2022:Sahurk012@mycluster.ne522qz.mongodb.net/sceduler", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDB is connected."))
    .catch(err => console.log(err))

app.use('/', router)

const PORT = 3000

app.listen(PORT, () => console.log("express app is running On PORT", PORT))