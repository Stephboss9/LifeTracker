const Nutrition = require("../models/nutrition")
const {BadRequestError, ForbiddenError} = require ("../utils/errors")

//ensure authenticated user is owner of nutrition
//if not throw an error, otherwise your good

const authenticatedOwnsNutrition = async (req, res, next) => {
    try {
        const {user} = res.locals
        const {nutritionId} = req.params
        const nutrition = await Nutrition.fetchNutritionById(nutritionId)


        if (nutrition.user_id != user.id){
            throw new ForbiddenError("User is not allowed to update others users nutrition records")
        }

        res.locals.nutrition = nutrition
        return next()
    }catch(err) {
        next(err)
    }
}

module.exports = {authenticatedOwnsNutrition}