const express = require("express")
const User = require("../models/user")
const authRouter = express.Router()
const {generateToken} = require("../utils/tokens")
const security = require("../middleware/security")



authRouter.get("/me", security.requireAuthenticatedUser ,async (req, res, next) => {
    try {
        const user = res.locals.user
        const publicUser = await User.makePublicUser(user)
        return res.status(200).json({user: publicUser})
    }catch (err){
        next(err)
    }
})


authRouter.post("/login", async (req, res, next) => {
    try {
        const user = await User.login(req.body)
        const token = generateToken(user)
        return res.status(200).json({"user":user, "token":token})
    }catch (err){
        next(err)
    }
})

authRouter.post("/register", async (req, res, next) => {
    try {
        console.log(req.body)
        const user = await User.register(req.body)
        const token = generateToken(user)
        return res.status(201).json({"user": {"email": `${user.email}`, "name": `${user.firstName}`}, "token":token})
    }catch (err){
        next(err)
    }
})

module.exports = authRouter

