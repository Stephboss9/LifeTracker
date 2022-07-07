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
       

          //handles login requests

       /*
       const url = `${this.remoteHostUrl}/${endpoint}`
       const headers =  {
           "Content-Type": "application/json"
       }

       if (this.token) {
        headers["Authorization"] = `Bearer ${this.token}`
       }

       try {
        const res = await axios({url, method, data, headers})
            return res.data

       } catch(error) {
            console.log("Error caught in ApiClient", error)
            const message = err?.response?.data?.error?.message

       }
       */
        if(endpoint ==='login') {
        try {
            let response = await axios.post(`http://localhost:3001/auth/${endpoint}`, {
                "email":userInfo.email,
                "password":userInfo.password
            })
                this.setToken(response.data.token)
                console.log("User Login Response: ", response.data)
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
                console.log("User registered succesfully", response.data)
                const loginInfo = {email:userInfo.email, password:userInfo.password}
                let currentUser = this.login(loginInfo)
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
                return response.data
            } catch (err)  {
                console.log(err)
                return err
            }
        }
        else if(endpoint === "nutrition_post"){
            try {
                let response = await axios.post(`http://localhost:3001/nutrition`, {
                    
                        imageUrl:userInfo.imageUrl,
                        name:userInfo.name,
                        category:userInfo.category,
                        calories:userInfo.calories,
                        quantity:userInfo.quantity,
                        user_id:id
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
                    return response.data
            }catch (err) {
                console.log(err)
                return err;
            }
        }
        else if (endpoint == "activity"){
            try {
                let response = await axios.get(`http://localhost:3001/${endpoint}`, {
                    headers: {
                        "content-type": `application/json`,
                        "user_id": `${id}`
                    }
                })    
                    console.log(`Activity for user with id: ${id}`, response.data)               
                    return {activities:response.data, error:null}
            }catch (err) {
                console.log(err)
                return {activities:null, error:err}
            }
        }
    }

    async login (userInfo){
       return await this.request("login", userInfo)
    }

     async signup (userInfo){
        return await this.request("register", userInfo)
      
    }
    async fetchUserFromToken () {
       return await this.request("me", this.token)
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
        return await this.request("nutrition_get", this.token, userId)

    }

    pushNutrition = async (nutritionInfo, userId) => {
        return await this.request("nutrition_post", nutritionInfo, userId)

    }
    getActivity= async (user) => {
        return await this.request("activity", null, user.id )
    }

    

}

export default ApiClient