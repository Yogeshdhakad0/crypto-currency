import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
name:'cart',
initialState:{
    cartiten:[],
isLoading:false,
isError:false,
issuccess:false,
},

reducers:{
    add: (state,action)=>{
        const statementdata= state.cartiten.find((item)=> item.id === action.payload.id)
        console.log(statementdata)
        if(statementdata){
            statementdata.quantity +=1
        }
        else{
            state.cartiten.push({...action.payload,quantity :1})
        }
    },
     remove:(state,action)=>{
return{
    ...state,
    cartiten:state.cartiten.filter((item)=>item.id !==action.payload )
}
     }
}

})
export const {add,remove}=cartslice.actions
 export default cartslice.reducer