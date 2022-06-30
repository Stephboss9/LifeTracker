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
        axios.post(`http://localhost:3001/auth/${endpoint}`, {
            "email":userInfo.email,
            "password":userInfo.password
        }).then (response => {
            console.log(response.data.token)
            window.localStorage.setItem("lifetracker_token", response.data.token)
            user = response.data.user
            console.log(user)

        }). catch (err => {
            console.log(err)
        })
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
                user = response.data.user
                //login the user at the same time
                login({"email": userInfo.email, "password":userInfo.password})
            }). catch (err => {
                console.log(err)
            }) 
        }
        //handles 
        else if (endpoint = 'me') {
            axios.get(`http://localhost:3001/${endpoint}`, 
            userInfo,
            {
                headers: {
                    "Content-Type": `application/json`,
                    "authentication": `Bearer ${userInfo}`
                }
            }).then (response => {
                console.log("User registered succesfully")
                user = response.data.user
            }). catch (err => {
                console.log(err)
            })  
        }
        return user
    }
   login (userInfo){
       ApiClient.request("login", userInfo)
    }

     signup (userInfo){
        ApiClient.request("register", userInfo)
    }
     fetchUserFromToken (){
        ApiClient.request("me", this.token)
    }

   logout(){
        window.localStorage.removeItem('lifetracker_token')
        location.replace("http://localhost:3000/")
    }

    loggedIn() {
        if(this.token != null){
            return false
        } else {return true}
    }
}

export default ApiClient