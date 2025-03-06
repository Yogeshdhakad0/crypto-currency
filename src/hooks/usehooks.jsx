import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

 


 const  usehooks=()=>{
    const {user}=useSelector(state=>state.auth)

    const [loggding, setloggindin]=useState(false)
     const [ loading,setloadin]=useState(true)


  useEffect(()=>{
user ? setloggindin(true): setloggindin(false)
setloadin(false)
  },[user])

  return {loggding,loading}




 }



  export default  usehooks 