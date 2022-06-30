import axios from "axios"

class ApiClient {
    constructor(remoteHostUrl = "http://localhost:3001"){
        this.remoteHostUrl = remoteHostUrl
        this.token = null
    }
   
   
    setToken(token){
        this.token = token
    }

    static request (endpoint, userInfo){
       let  user = null
       //handles login requests
        if(endpoint ==='login') {
        axios.post(`"http://localhost:3001"/${endpoint}`, {
            "email":userInfo.email,
            "password":userInfo.password
        }).then (response => {
            window.localStorage.setItem("lifetracker_token", this.token)
            user = response.data.user

        }). catch (err => {
            console.log(err)
        })
        }
        //handles register requests
        else if(endpoint==='register'){
            axios.post(`"http://localhost:3001"/${endpoint}`, {
                "email":userInfo.email,
                "password":userInfo.password,
                "userName":userInfo.userName,
                "firstName":userInfo.firstName,
                "lastName":userInfo.lastName
            }).then (response => {
                console.log("User registered succesfully")
                user = response.data.user
                //login the user at the same time
                this.login({"email": response.user.email, "password":response.user.password})
            }). catch (err => {
                console.log(err)
            }) 
        }
        //handles 
        else if (endpoint = 'me') {
            axios.get(`"http://localhost:3001"/${endpoint}`, 
            userInfo,
            {
                headers: {
                    "Content-Type": `application/json`,
                    "Authorization": `Bearer ${userInfo}`
                }
            }).then (response => {
                console.log("User registered succesfully")
                user = response.data.user
            }). catch (err => {
                console.log(err)
            })  
        }
    }
    static login (userInfo){
        request("login", userInfo)
    }

    static signup (userInfo){
        request("register", userInfo)
    }
    static fetchUserFromToken (){
        request("me", this.token)
    }

    static logout(){
        window.localStorage.removeItem('lifetracker_token')
        location.reload()
    }

    loggedIn() {
        if(this.token != null){
            return false
        } else {return true}
    }
}

export default ApiClient