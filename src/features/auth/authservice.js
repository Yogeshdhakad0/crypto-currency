import axios from "axios"
const API_URL = "https://authenticationeskills.vercel.app/api/user";
const getregister=async(formdata)=>{
    const response =await axios.post(API_URL +'/register',formdata)
    localStorage.setItem('user',JSON.stringify(response.data))
 return response.data
}

const getlogin=async(formdata)=>{
    const response =await axios.post(API_URL +'/login',formdata)
    localStorage.setItem('user',JSON.stringify(response.data))
 return response.data
}




const service={getregister,getlogin}
export default service