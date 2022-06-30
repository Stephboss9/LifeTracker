import axios from "axios"
import { API_BASE_URL } from "../constants"

class ApiClient {
    constructor(remoteHostUrl){
        this.remoteHostUrl = remoteHostUrl
        this.token = null
    }
   
   
    setToken(token){
        this.token = token
    }

    static request (){
        axios.get(`${API_BASE_URL}/login`).then (response => {
            setToken(response.data.token)
        }). catch (err => {
            console.log(err)
        })
    }

    static signup (){
        axios.get(`${API_BASE_URL}/register`).then (response => {
            console.log("User registered succesfully")
        }). catch (err => {
            console.log(err)
        })
    }

    loggedIn() {
        if(this.token != null){
            return false
        } else {return true}
    }
}

module.exports = ApiClient