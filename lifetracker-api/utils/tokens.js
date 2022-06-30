require("dotenv")
const req = require("express/lib/request")

const SECRET_KEY = process.env.SECRET_KEY || "25020a8ec773c1c0f8d998bd20bb500fb93f033ad9b50ab9bcd43d5ae251f7de7939f31031a59d5340f3ab25cd14745bcff54e967617cdcb2d78906f9efb5803"
const jwt = require("jsonwebtoken")
const { UnauthorizedError } = require("./errors")

function generateToken(user){
    const token =  jwt.sign(user, SECRET_KEY)
    return token
}

function validateToken(token, next){
    jwt.verify(token, SECRET_KEY, (err,user) => {
        if (err){
            throw new UnauthorizedError("Invalid Token")
        }else {
            console.log("access token verified")
            req.user = user
            next()
        }
    })
    
}

module.exports = {generateToken, validateToken}