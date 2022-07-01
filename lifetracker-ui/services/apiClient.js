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

    async request (endpoint, userInfo, id){
       //handles login requests
       
        if(endpoint ==='login') {
        try {
            let response = await axios.post(`http://localhost:3001/auth/${endpoint}`, {
                "email":userInfo.email,
                "password":userInfo.password
            })
                this.setToken(response.data.token)
                return response.data
        }catch (err) {
            console.log(err)
            return err;
        }
        }
        //handles register requests
        else if(endpoint==='register'){
            axios.post(`http://localhost:3001/auth/${endpoint}`, {
                "email":userInfo.email,
                "password":userInfo.password,
                "userName":userInfo.userName,
                "firstName":userInfo.firstName,
                "lastName":userInfo.lastName
            }).then (response => {
                console.log("User registered succesfully")
                console.log(response.data)
                this.login({"email": userInfo.email, "password":userInfo.password})
                return response.data
                //login the user at the same time
            }). catch (err => {
                console.log("error is", err)
            }) 
        }
        //handles 
        else if (endpoint === 'me') {
            try {
                let response = await axios.get(`http://localhost:3001/auth/${endpoint}`, 
                {
                    headers: {
                        "content-type": `application/json`,
                        "authentication": `Bearer ${userInfo}`
                    }
                })
                console.log("User Logged in succesfully", response.data)
                return response.data
            } catch (err)  {
                console.log(err)
                return err
            }
        }
        else if(endpoint === "nutrition_post"){
            try {
                let response = await axios.post(`http://localhost:3001/nutrition`, {
                    nutrition: {
                        imageUrl:userInfo.imageUrl,
                        name:userInfo.name,
                        category:userInfo.category,
                        calories:userInfo.calories,
                        quantity:userInfo.quantity
                    },
                }
                
                )
                    this.setToken(response.data.token)
                    return response.data
            }catch (err) {
                console.log(err)
                return err;
            }
        }
        else if(endpoint === "nutrition_get"){
            try {
                let response = await axios.get(`http://localhost:3001/nutrition`, {
                    headers: {
                        "content-type": `application/json`,
                        "authentication": `Bearer ${userInfo}`,
                        "user_id": `${id}`
                    }
                })                   
                     console.log("products for currentUser", response.data)
                    return response.data
            }catch (err) {
                console.log(err)
                return err;
            }
        }
    }

    async login (userInfo){
       return await this.request("login", userInfo)
    }

     signup (userInfo){
        this.request("register", userInfo)
        if(this.currentUser != null) {
            console.log(this.currentUser)
        }
    }
    async fetchUserFromToken () {
       return await this.request("me", this.token)
    }

   logout(){
        this.setToken("")
        console.log("current token in api client:", this.token)
        location.assign(PAGE_URL)
    }

    loggedIn() {
        if(this.token != null){
            return false
        } else {return true}
    }

    getNutrition = async (userId) =>{
        return await this.request("nutrition_get", this.token, userId)

    }

    pushNutrition = async (nutritionInfo, userId) => {
        return await this.request("nutrition_post", nutritionInfo, userId)

    }

}

export default ApiClient