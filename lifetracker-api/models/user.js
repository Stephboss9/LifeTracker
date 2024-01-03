const db = require("../db")
const bcrypt = require("bcrypt")
const {BCRYPT_WORK_FACTOR} = require("../config")
const {BadRequestError, UnauthorizedError} = require("../utils/errors")
class User {

    static async makePublicUser(user) {
    
        return {
            id:user.id,
            username:user.username,
            firstName:user.firstName,
            email:user.email,
            createdAt:user.created_at
        }
    }

    static async login(credentials){

        const requiredFields = ["email", "password"]
        requiredFields.forEach(field => {
            if(!credentials.hasOwnProperty(field)){throw new BadRequestError(`Missing ${field} in request body`)}
        })

        if (credentials.email.indexOf('@') <= 0){
            throw new BadRequestError("Invalid email")
        }
        const currentUser = await User.fetchUserByEmail(credentials.email)

        if(currentUser) {
            let isValid = await bcrypt.compare(credentials.password, currentUser.password)
            if (isValid){return User.makePublicUser(currentUser)}
        }
        throw new UnauthorizedError("Invalid email/password combo")

    }

    static async register(credentials){

        const requiredFields = ["email", "password", "userName", "firstName", "lastName"]
        requiredFields.forEach(field => {
            if(!credentials.hasOwnProperty(field)){throw new BadRequestError(`Missing ${field} in request body`)}
        })

        const currentUser = await User.fetchUserByEmail(credentials.email)
        if(currentUser){
            throw new BadRequestError(`Duplicate Email: ${credentials.email}`)
        }


        const hashedPW = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR)

        const result = await db.query(
            `
            INSERT INTO users (
            username,
            password,
            first_name,
            last_name,
            email
             )
             VALUES($1, $2, $3, $4, $5)   
             RETURNING id, username, first_name, last_name, email, created_at;
           `  , [credentials.userName, hashedPW, credentials.firstName, credentials.lastName, credentials.email])
            const user = result.rows[0]
            return User.makePublicUser(user)

    }

    static async fetchUserByEmail(email){

        if(!email){
            throw new BadRequestError("no email provided")
        }
        let query = 'SELECT * FROM users WHERE email = $1'
        let result = await db.query(query, [email.toLowerCase()])

        const user = result.rows[0]

        return user
    }
}

module.exports = User