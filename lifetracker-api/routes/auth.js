const express = require("express")
const User = require("../models/user")
const authRouter = express.Router()
const {generateToken} = require("../utils/tokens")
const authenticateToken = require("../middleware/security")



authRouter.get("/me",authenticateToken ,(req, res, next) => {
    try {
        return res.status(201).json(req.user)
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
        
        return res.status(201).json({"user": {"email": `${user.email}`, "name": `${user.firstName}`}})
    }catch (err){
        next(err)
    }
})

module.exports = authRouter

