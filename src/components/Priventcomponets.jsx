import React from 'react'
import usehooks from '../hooks/usehooks'
import { Navigate, Outlet } from 'react-router-dom'

const Priventcomponets = () => {

const {loggding,loading}  =    usehooks()


if(loading){

 <div className='font-bold  text-center bg-amber-700 min-h-screen'>


 <h1> Loading </h1>


 </div>


}
return  loggding ? <Outlet/>: <Navigate/>

}

export default Priventcomponets
