const jwt = require("jsonwebtoken")
const {SECRET_KEY} = require("../config")
const {  UnauthorizedError, BadRequestError } = require("../utils/errors")
const {validateToken} = require("../utils/tokens")

const jwtFrom = ({headers}) => {
    if(headers?.authorization){
        const [scheme, token] = headers.authorization.split(" ")
        if(scheme ===  "Bearer"){
            return token
        }
    }

    return undefined
}

const extractUserFromJwt = (req,res,next)=> {
    try  {
        const token = jwtFrom(req)
        console.log("current token", token)
        if (token) {
            console.log("hey")
            res.locals.user = validateToken(token)
            console.log("res.locals.user", res.locals.user)
        }
        return next()
    } catch(error){
        return next()
    }
}

function requireAuthenticatedUser (req, res, next){
    try {
        const {user} = res.locals
        console.log("currentUser", user)
        if(!user?.email) {
            throw new UnauthorizedError("Unathorized User")
        }
        return next()
    } catch (error){
        return next(error)
    }
}

module.exports = {extractUserFromJwt, requireAuthenticatedUser} 