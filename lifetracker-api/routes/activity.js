const express = require("express")
const Activity = require("../models/Activity")
const activityRouter = express.Router()
const {generateToken} = require("../utils/tokens")
const authenticateToken = require("../middleware/security")


activityRouter.get("/", async (req, res, next)=> {
    try {
        userId = req.headers['user_id']
        const CaloriesPerDay = await Activity.calculateDailyCaloriesSummaryStats(userId)
        const avgCaloriesPerCategory = await Activity.calculatePerCategoryCaloriesSummaryStats(userId)
        res.status(200).json({ "nutrition": { "calories": { "perDay": CaloriesPerDay, "perCategory": avgCaloriesPerCategory}} })
    } catch(err) {
        next(err)
    }
})
module.exports = activityRouter
