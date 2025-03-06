import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../features/cart/cartslice";

const CartItem = ({coin}) => {
  const dispatch=useDispatch()
const removecart=(coin)=>{
  dispatch(remove(coin))
}

  return (
    <div className="relative p-4 my-2 border border-gray-600 flex items-center justify-start rounded-md">
      <img
        className="h-26"
        src={coin?.image?. large}
        alt=""
      />
      <div className="mx-4">
        <h1 className="text-gray-500 font-semibold text-2xl">{coin?.name}</h1>
        <h2 className="text-gray-500 font-semibold text-xl">Price : {coin?.market_data?.current_price?.inr}</h2>
        <h3 className="text-gray-500 font-semibold text-lg">Qty :{coin?.quantity}</h3>
      </div>
      <button onClick={()=>removecart(coin.id)} className="absolute top-5 right-5 bg-red-500 text-white py-1 px-2 rounded-md text-sm font-bold">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
