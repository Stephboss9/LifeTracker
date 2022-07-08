import axios from "axios"
const PAGE_URL = "http://localhost:3000"

class ApiClient {
    constructor(remoteHostUrl = "http://localhost:3001"){
        this.remoteHostUrl = remoteHostUrl
        this.token = null
        this.currentUser = null
    }
   
   
    setToken(token){
        this.token = token
        window.localStorage.setItem("lifetracker_token", token)

    }

    async request ({endpoint, method = "GET", data = {}}){
       //handles login requests
       

          //handles login requests

       const url = `${this.remoteHostUrl}/${endpoint}`
       const headers =  {
           "Content-Type": "application/json"
       }

       if (this.token) {
        headers["Authorization"] = `Bearer ${this.token}`
       }

       try {
        const res = await axios({url, method, data, headers})
            return {data:res.data, error:null}

       } catch(error) {
            console.log("Error caught in ApiClient", error)
            const message = err?.response?.data?.error?.message
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
        return await this.request({endpoint: `nutrition/${userId}`, method: `GET`, data:null})

    }

    pushNutrition = async (nutritionInfo, userId) => {
        return await this.request({endpoint: `nutrition`, method: `POST`, data: nutritionInfo})

    }
    getActivity= async (user) => {
        return await this.request({endpoint: `activity`, method: `GET`, data: user} )
    }

    

}

export default ApiClient