const { BadRequestError } = require("../utils/errors")
const {validateToken} = require("../utils/tokens")

function authenticateToken (req, res, next){
    const authHeader = req.headers['authentication']
    const token = authHeader && authHeader.split(' ')[1]
    if (token === null){throw new BadRequestError("No header passed when trying to access user info")}
    validateToken(token, next)

}

module.exports = authenticateToken