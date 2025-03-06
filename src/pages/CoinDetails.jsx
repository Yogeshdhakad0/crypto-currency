import React, { useEffect } from "react";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetalis } from "../features/coins/coinslice";
import { add } from "../features/cart/cartslice";
import { toast } from "react-toastify";

const CoinDetails = () => {
  const { theme } = useSelector((state) => state.theme);
 const {coin,isError,isLoading, message}=useSelector(state=>state.coins)
 const {user}=useSelector(state=>state.auth)
 const dispatch=useDispatch()

const {coinid}=useParams()
useEffect(()=>{
if(coinid){
  dispatch(getDetalis(coinid))
}


},[coinid])


const  handlacart=(coin)=>{

  dispatch(add(coin))

  toast.success('🎉 add to cart successfully!', {
    position: "top-center",
    autoClose: 1000,
    theme: "light",
 
    });
}




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
          ? "min-h-screen bg-gray-900 px-8 md:px-16 py-16"
          : "min-h-screen bg-white px-8 md:px-16 py-16"
      }
    >
      <BackButton />

      <div className="border border-gray-500 p-3 rounded-sm flex items-center flex-col space-y-2 md:flex-row md:space-y-0 space-x-0 md:space-x-2 ">
        <div className="flex items-center justify-center p-4 rounded-md w-full md:w-1/3">
          <img
            className="h-52"
            src={coin?.image?.large}
            alt=""
          />
        </div>
        <div className="relative  p-4 rounded-md w-full md:w-2/3">
          <h1 className="text-gray-400 text-3xl font-bold my-2">
            Name :{coin?.name}
          </h1>
          <h2 className="text-gray-400 text-2xl font-bold my-2">
            Symbol :{coin?.symobol}
          </h2>
          <h3 className="text-green-400 text-xl font-bold my-2">
            Price : 9415192
          </h3>
          <div className="bg-green-600 rounded-md text-center text-sm font-semibold text-white p-1 absolute top-3 right-3">
            <p>Rank #{coin?.market_cap_rank}</p>
          </div>
          <p className="text-gray-400 my-2 text-sm">
           {coin?.description?.en}
          </p>
         { user ?
           <button onClick={()=>handlacart(coin)}  className="my-4 text-center bg-green-600 text-white p-2 w-full rounded-md hover:bg-green-800 duration-200 font-bold">
           Add To Cart
         </button>:
          <button onClick={()=>handlacart(coin)} disabled className="my-4 text-center bg-green-600 text-white p-2 w-full rounded-md hover:bg-green-800 duration-200 font-bold">
          Add To Cart
        </button>
         }
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
