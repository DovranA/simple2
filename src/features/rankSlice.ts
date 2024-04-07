import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

const initialState:any = {
    usersActiveBtn: 0,
    usersData: [],
    videosActiveBtn:0,
    videosData:[]
}


const rankSlice = createSlice({
    name:"rank",
    initialState,
    reducers:{
        setUserActiveBtn:(state, action) => {
            state.usersActiveBtn = action.payload
        },
        setVideosActiveBtn:(state, action) => {
            state.videosActiveBtn = action.payload
        }
    }
})


export const {setUserActiveBtn, setVideosActiveBtn} = rankSlice.actions

export default rankSlice.reducer

export const SlctUserActiveBtn = (state:RootState) => state.rank.usersActiveBtn
export const SlctVideosActiveBtn = (state:RootState) => state.rank.videosActiveBtn