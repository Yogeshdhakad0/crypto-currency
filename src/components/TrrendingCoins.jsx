import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Gettrending } from "../features/coins/coinslice";

const TrrendingCoins = () => {
 const {trendingcoin,isError,isLoading, message}=useSelector(state=>state.coins)
 const dispatch=useDispatch()
 useEffect(()=>{
dispatch(Gettrending())
 },[])




  if (isError) {
    return (
      <h1 className="text-center text-red-400 font-semibold uppercase">
        Something Went Wrong...
      </h1>
    );
  }

  if (isLoading) {
    return (
      <h1 className="text-center text-gray-400 font-semibold uppercase">
        Fetching Trending Coins...
      </h1>
    );
  }

  return (
    <div
      className="md:px-24 px-8 flex items-center justify-center flex-wrap
"
    >
    {
      trendingcoin.map((coin)=>{
        return(
          <Link
          to={`/coin/${coin?.item?.id}`}
key={coin?.item?.id}
          className="m-1 bg-gray-600 py-1 px-2 text-sm font-bold rounded-lg text-white text-center hover:bg-lime-600"
        >
          {coin?.item?.name}
        </Link>
        )
      })
    }
    </div>
  );
};

export default TrrendingCoins;
