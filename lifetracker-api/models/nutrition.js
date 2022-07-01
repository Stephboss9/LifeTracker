const db = require("../db")
const {BadRequestError, UnauthorizedError} = require("../utils/errors")
class Nutrition {

    static async createNutrition(info) {
        const requiredFields = ["name", "category", "calories", "imageUrl", "user_id", "quantity"]
        requiredFields.forEach(field => {
            if(!info.hasOwnProperty(field)){throw new BadRequestError(`Missing ${field} in request body`)}
        })
        const created_at = new Date().toISOString()
        const nutritionResult = await db.query(
            `
            INSERT INTO nutrition (
            name,
            category,
            calories,
            image_url,
            user_id,
            created_at
             )
             VALUES($1, $2, $3, $4, $5, $6)   
             RETURNING id, name, category, calories, user_id, created_at;
           `  , [info.name, info.category, info.calories, info.imageUrl, info.user_id, created_at])
            const nutrition = nutritionResult.rows[0]
            return nutrition
    }

    static async fetchNutritionById(id){
        if(!id){
            throw new BadRequestError("no id provided")
        }
        let query = 'SELECT * FROM nutrition WHERE id = $1'
        let result = await db.query(query, [id])

        const nutrition = result.rows[0]
        if(nutrition){return nutrition}else {throw new BadRequestError("No food item was found with that id")}
    }

    static async register(credentials){
       
    }

    static async listNutritionForUser(user_id){
        console.log(user_id)
        if(!user_id){
            throw new BadRequestError("no user id provided")
        }
        let query = 'SELECT * FROM nutrition WHERE user_id = $1'
        let result = await db.query(query, [user_id])

        const nutritions = result.rows
        if(nutritions){return nutritions}else {throw new BadRequestError("No food item was found with that id")}
    }
}

module.exports = Nutrition