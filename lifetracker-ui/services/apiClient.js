import axios from "axios"
const PAGE_URL = "http://localhost:3000"

class ApiClient {
    constructor(remoteHostUrl = "https://lifetracker-web-app.herokuapp.com"){
        this.remoteHostUrl = remoteHostUrl
        this.token = null
        this.currentUser = null
    }
   
   
    setToken(token){
        this.token = token
        window.localStorage.setItem("lifetracker_token", token)

    }

    async request ({endpoint, method = "GET", data = {}, id = null}){
       //handles login requests
       

          //handles login requests

       const url = `${this.remoteHostUrl}/${endpoint}`
       const headers =  {
           "Content-Type": "application/json"
       }

       if (this.token) {
        headers["Authorization"] = `Bearer ${this.token}`
       }

       if(id){headers["user_id"] = `${id}`}
    
       try {
        const res = await axios({url, method, data, headers})
            return {data:res.data, error:null}

       } catch(error) {
            console.log("Error caught in ApiClient", error)
            const message = error?.response?.data?.error?.message
            return {data:null, error:message || String(err)}
       }
    }

    async login (userInfo){
       return await this.request({endpoint: `auth/login`, method: `POST`, data: userInfo})
    }

     async signup (userInfo){
        return await this.request({endpoint: `auth/register`, method: `POST`, data: userInfo})
      
    }
    async fetchUserFromToken () {
       return await this.request({endpoint: `auth/me`, method: `GET`, data: this.token})
    }

   logout(){
        this.setToken("")
        location.assign(PAGE_URL)
    }

    loggedIn() {
        if(this.token != null){
            return false
        } else {return true}
    }

    getNutrition = async (userId) =>{
        console.log("userId ingetNutrition method", userId)

        return await this.request({endpoint: `nutrition`, method: `GET`, data:{}, id: userId})

    }

    pushNutrition = async (nutritionInfo, userId) => {
        console.log("nutrition info id is: ", nutritionInfo.user_id)
        return await this.request({endpoint: `nutrition`, method: `POST`, data: nutritionInfo, id:userId})

    }
    getActivity= async (userId) => {
        console.log("userId in getActivity method", userId)

        return await this.request({endpoint: `activity`, method: `GET`, data: null, id:userId} )
    }
    getNutritionById = async (nutritionId) => {
        return await this.request({endpoint: `nutrition/${nutritionId}`, method: "GET", data:{}})
    }

    

}

export default ApiClient