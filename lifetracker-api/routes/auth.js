const express = require("express")
const User = require("../models/user")
const authRouter = express.Router()


authRouter.post("/login",async (req, res, next) => {
    try {
        const user = await User.login(req.body)
        return res.status(200).json({"user": {"email": `${user.email}`}})
    }catch (err){
        next(err)
    }
})

authRouter.post("/register", async (req, res, next) => {
    try {
        const user = await User.register(req.body)
        return res.status(201).json({"user": {"email": `${user.email}`, "name": `${user.firstName}`}})
    }catch (err){
        next(err)
    }
})

module.exports = authRouter

