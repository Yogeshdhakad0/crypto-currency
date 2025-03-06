import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import services from "./coinservice";

const  coinslice=createSlice({
    name:'coin',
    initialState:{
        trendingcoin:[],
        coins:[],
        coin:{},
        isError:false,
        isLoading:false,
        issuccess:false,
        message:''
    },
    reducers:{},
    extraReducers: builder=>{
        builder
        .addCase(Gettrending.pending,(state,action)=>{
state.isError=false
state.isLoading=true
state.issuccess=false
})
.addCase(Gettrending.fulfilled,(state,action)=>{
    state.isError=false
    state.isLoading=false
    state.issuccess=true
    state.trendingcoin=action.payload })
    .addCase(Gettrending.rejected,(state,action)=>{
        state.isError=true
        state.isLoading=false
        state.issuccess=false
        state.message=action.payload })


        .addCase(getSerachin.pending,(state,action)=>{
            state.isError=false
            state.isLoading=true
            state.issuccess=false
            })
            .addCase(getSerachin.fulfilled,(state,action)=>{
                state.isError=false
                state.isLoading=false
                state.issuccess=true
                state.coins=action.payload })
                .addCase(getSerachin.rejected,(state,action)=>{
                    state.isError=true
                    state.isLoading=false
                    state.issuccess=false
                    state.message=action.payload }) 
        



                    .addCase(getDetalis.pending,(state,action)=>{
                        state.isError=false
                        state.isLoading=true
                        state.issuccess=false
                        })
                        .addCase(getDetalis.fulfilled,(state,action)=>{
                            state.isError=false
                            state.isLoading=false
                            state.issuccess=true
                            state.coin=action.payload })
                            .addCase(getDetalis.rejected,(state,action)=>{
                                state.isError=true
                                state.isLoading=false
                                state.issuccess=false
                                state.message=action.payload }) 
                    
            



    }
})

export default coinslice.reducer


 export  const  Gettrending=createAsyncThunk('COIND/TRENIDNG', async()=>{
    try {
         return  await services.trendingcoin()
        
    } catch (error) {
        console.log(error)
    }
 })


 export  const getSerachin=createAsyncThunk('SERACHIN/COIN', async(data)=>{
    try {
         return  await services.serachcoin(data)
        
    } catch (error) {
        console.log(error)
    }
 })

 export  const getDetalis=createAsyncThunk('DETALI/COIN', async(data)=>{
    try {
         return  await services.coindetalis(data)
        
    } catch (error) {
        console.log(error)
    }
 })
