import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getLoginOut } from "../features/auth/authslice";


const Navbar = () => {
  const { theme } = useSelector((state) => state.theme);

  const naviget=useNavigate()
  const {cartiten}=useSelector(state=>state.cart)
  const dispatch=useDispatch()

  const { user } = useSelector(
    (state) => state.auth
  );
const cartt=()=>{
  naviget('/cart')
}

const handlalogout=()=>{
  dispatch(getLoginOut())
}
  return (
    <nav
      className={
        theme
          ? "bg-gray-900 py-4 md:px-16 px-8 shadow-lg border-b border-gray-800 flex items-center justify-between"
          : "bg-gray-200 py-4 md:px-16 px-8 shadow-lg flex items-center justify-between"
      }
    >
      <Link to={"/"}>
        <h1
          className={
            theme
              ? "text-white font-black text-xl"
              : "text-black font-black text-xl"
          }
        >
          Crypto<span className="text-red-400">DCX</span>
        </h1>
      </Link>

      <div>
        {user ? (
          <>
            
            
            <Link to={"/cart"}>
              <button onClick={cartt} className="bg-green-600 py-1 text-white px-4 text-sm font-bold mx-2 rounded-lg">
                Cart {cartiten.length}
              </button>
            </Link>



            <button onClick={handlalogout} className="bg-red-600 py-1 text-white px-4 text-sm font-bold mx-2 rounded-lg">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={'/login'} className="bg-blue-600 py-1 text-white px-4 text-sm font-bold mx-2 rounded-lg">
              Sign In
            </Link>
            <Link to={'/register'} className="bg-blue-600 py-1 text-white px-4 text-sm font-bold mx-2 rounded-lg">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
