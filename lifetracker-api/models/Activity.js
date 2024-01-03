const db = require("../db")
const {BadRequestError, UnauthorizedError} = require("../utils/errors")

class Activity {

    static calculateDailyCaloriesSummaryStats = async (userId) => {
        const query = `SELECT created_at::date AS "date", SUM(calories*quantity) AS "totalCaloriesPerDay" FROM nutrition WHERE user_id = $1 GROUP BY created_at::date;`
        const values = [userId]

        let result = await db.query(query, values)
        
        return result.rows

    }

    static calculatePerCategoryCaloriesSummaryStats = async (userId) => {
        const query = `SELECT category AS "category", ROUND(AVG(calories*quantity),1) AS "avgCaloriesPerCategory" FROM nutrition WHERE user_id = $1 GROUP BY category;`

        const values = [userId]

        let result = await db.query(query, values)
        return result.rows
    }










}

module.exports = Activity