const express = require('express')
const morgan = require('morgan')
const cors = require("cors")

const appTest = express.Router()

appTest.use(morgan('tiny'))
appTest.use(express.json())
appTest.use(cors())

appTest.get("/", (req, res, next) => {
    res.status(200).json({"ping":"pong"})
})



module.exports = appTest