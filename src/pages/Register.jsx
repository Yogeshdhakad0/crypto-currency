import { useEffect, useState } from "react";
import FormImage from "../assets/form_image.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { registerUser } from "../features/auth/authSlice";
import { getRegister } from "../features/auth/authslice";

const Register = () => {
  const { theme } = useSelector((state) => state.theme);

  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );
  const naviget= useNavigate()
  const dispatch=useDispatch()

  const [formdata,setFormdata]=useState({
    name:'',
    email:'',
    password:"",
     password2:"",
  })

  const {name, email, password,password2}=formdata


  
  const handleChange=(e)=>{
    setFormdata({
      ...formdata,
      [e.target.name]:e.target.value
    })
  }


  const handleSubmit=(e)=>{
    e.preventDefault()
    if(password!== password2){
      toast.error('dont macht password')
    }
    else{
      dispatch(getRegister(formdata))
    }
 
  }

 useEffect(()=>{


if(user){
  naviget('/')
}
 if(isError && message){
  toast.error(message)
 }


 },[user,isError,message])


if (isError) {
  return (
    <h1 className="text-center min-h-screen text-red-400 font-semibold uppercase">
      Something Went Wrong...
    </h1>
  );
}

if (isLoading) {
  return (
    <h1 className="text-center  min-h-screen bg-gray-900 font-semibold uppercase text-white">
      Fetching Trending Coins...
    </h1>
  );
}

  return (
    <div
      className={
        theme
          ? "min-h-[90vh] py-16 px-8 md:px-16 bg-gray-900 "
          : "min-h-[90vh] py-16 px-8 md:px-16 "
      }
    >
      <div className="shadow border rounded-sm p-4 md:pd-5 flex flex-col md:flex-row items-center justify-between">
        <div className=" w-full md:w-1/2">
          <h1 className="my-3 font-bold text-3xl ml-2 uppercase text-gray-500">
            Register Here
          </h1>
          <p className="my-3 ml-2 text-sm text-gray-600">
            Kindly Enter Your Details
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className={
                theme
                  ? "border-2 rounded-md p-2 w-full my-2 text-white bg-gray-900 border-gray-700"
                  : "border-2 rounded-md p-2 w-full my-2 text-white"
              }
              placeholder="Enter Name"
              required
              value={name}
              name="name"
              onChange={handleChange}
            />
            <input
              type="email"
              className={
                theme
                  ? "border-2 rounded-md p-2 w-full my-2 text-white bg-gray-900 border-gray-700"
                  : "border-2 rounded-md p-2 w-full my-2 text-white"
              }
              placeholder="Enter Email"
              required
              value={email}
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              className={
                theme
                  ? "border-2 rounded-md p-2 w-full my-2 text-white bg-gray-900 border-gray-700"
                  : "border-2 rounded-md p-2 w-full my-2 text-white"
              }
              placeholder="Enter Password"
              required
              value={password}
              name="password"
              onChange={handleChange}
            />
            <input
              type="password"
              className={
                theme
                  ? "border-2 rounded-md p-2 w-full my-2 text-white   bg-gray-900 border-gray-700"
                  : "border-2 rounded-md p-2 w-full my-2 text-white"
              }
              placeholder="Confirm Password"
              required
              value={password2}
              name="password2"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-teal-500 text-white font-bold py-2 px-5 rounded-md my-3 w-full md:w-1/2 hover:bg-teal-600 duration-200"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="w-1/2  md:block flex items-center justify-center">
          <img className="h-96" src={FormImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
