import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUsers:(state,action)=>{
            state.user = action.payload;
        },
        removeUser:(state,action)=>{
            state.user = null;
        }
    }
})

export const {setUsers, removeUser} = userSlice.actions;

export default userSlice.reducer;