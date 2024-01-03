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
        if (token) {
            res.locals.user = validateToken(token)
        }
        return next()
    } catch(error){
        return next()
    }
}

function requireAuthenticatedUser (req, res, next){
    try {
        const {user} = res.locals
        if(!user?.email) {
            throw new UnauthorizedError("Unathorized User")
        }
        return next()
    } catch (error){
        return next(error)
    }
}

module.exports = {extractUserFromJwt, requireAuthenticatedUser} 