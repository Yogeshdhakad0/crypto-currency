import service from "./authservice";

import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";


const users =JSON.parse(localStorage.getItem('user'))

const authslice=createSlice({
    name:'auth',
    initialState:{
user: users|| null,
isLoading:false,
isError:false,
issuccess:false,
message:''
    },
    reducers:{},
    extraReducers:builder=>{
        builder
.addCase(getRegister.pending,(state,action)=>{
state.isError=false
state.issuccess=false
state.isLoading=true})
.addCase(getRegister. fulfilled,(state,action)=>{
    console.log(action.payload)
    state.isError=false
    state.issuccess=true
    state.user=action.payload
    state.isLoading=false
})
    .addCase(getRegister.rejected,(state,action)=>{
        state.isError=true
        state.issuccess=false
        state.isLoading=false
        state.message=action.payload
    })

    .addCase(getLogin.pending,(state,action)=>{
        state.isError=false
        state.issuccess=false
        state.isLoading=true})
        .addCase(getLogin. fulfilled,(state,action)=>{
            console.log(action.payload)
            state.isError=false
            state.issuccess=true
            state.user=action.payload
            state.isLoading=false
        })
            .addCase(getLogin.rejected,(state,action)=>{
                state.isError=true
                state.issuccess=false
                state.isLoading=false
                state.message=action.payload
            })

            .addCase(getLoginOut.fulfilled,(state,action)=>{
                state.isError=false
                state.issuccess=false
                state.user=null
                state.isLoading=false
                state.message=''
            })
    }
})

export default authslice.reducer

export const getRegister=createAsyncThunk('AUTH/REGISTER',async(formdata, ThunkAPI)=>{


try {
    return await service.getregister(formdata)

} catch (error) {
    const message=error.response.data.message
    return ThunkAPI.rejectWithValue(message)
    
}

})





export const getLogin=createAsyncThunk('AUTH/LOGIN',async(formdata, ThunkAPI)=>{

try {
    return await service.getlogin(formdata)

} catch (error) {
    const message=error.response.data.message
    return ThunkAPI.rejectWithValue(message)
}

})


 export const  getLoginOut=createAsyncThunk('LOGOUT/AUTH',async()=>{
    localStorage.removeItem('user')
 })


