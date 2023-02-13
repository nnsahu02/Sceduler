const express = require('express')
const router = express.Router()
const { sceduler } = require('./controller')

router.post('/sceduler', sceduler)

module.exports = router