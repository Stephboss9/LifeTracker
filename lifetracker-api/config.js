require('dotenv').config()
require("colors")

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001
const BCRYPT_WORK_FACTOR = 13

function getDatabaseUri() {
    const dbUser = process.env.DATABASE_USER || "postgres"    
    const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS): "Stephisboss19$12"
    const dbHost = process.env.DATABASE_HOST || 'localhost'
    const dbPort = process.env.DATABASE_PORT || '5432'
    const dbName = process.env.DATABASE_NAME || 'lifetracker'

    //if the database url env var, use that 
    //else create db connection string ourselves
    return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
}

console.log("life tracker hub:".green)
console.log("PORT:".blue, PORT)
console.log("DATABASE URI: ".blue, getDatabaseUri())
console.log("----")

module.exports = {
    PORT,
    BCRYPT_WORK_FACTOR,
    getDatabaseUri,
}