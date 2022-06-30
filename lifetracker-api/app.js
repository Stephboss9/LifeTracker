const express = require('express')
const morgan = require('morgan')
const cors = require("cors")
const appTest = require("./app.test")
const { NotFoundError } = require('./utils/errors')


const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())
app.use("/tests", appTest)

app.get("/", (req, res, next) => {
    res.status(200).json({"ping":"Watsup Doc"})
})


app.use((req, res, next) => {
    return next(new NotFoundError("That page was not found. Ask your grandson for tech support"))
})

app.use((error, req, res, next) => {
    let status = error.status
    let message = error.message || "Something went wrong in the application"
    return res.status(status).json({error:{status:status, message:message}})
})



module.exports = app