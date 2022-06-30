const express = require('express')
const morgan = require('morgan')
const cors = require("cors")
const appTest = require("./app.test")
const auth = require("./routes/auth")
const { NotFoundError } = require('./utils/errors')


const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded());
app.use(cors())
app.use("/tests", appTest)



app.use("/auth", auth)

app.get("/", (req, res, next) => {
    res.status(200).json({"ping":"Watsup Doc"})
})


app.use((req, res, next) => {
    return next(new NotFoundError("That page was not found. Ask your grandson for tech support"))
})

app.use((error, req, res, next) => {
    let status = error.status || 500
    let message = error.message || "Something went wrong in the application"
    res.status(status).json({error:{status:status, message:message}})
})



module.exports = app