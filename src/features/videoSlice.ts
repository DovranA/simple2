import {  createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { TopVideo } from "../types/topUsers";


const initialState:any = {
    data: [],
    playerModal: false,
    lockation: ""
}



const playerSlice = createSlice({
    name:"player",
    initialState,
    reducers:{
        setPlayerModal: (state) => {
            state.playerModal = !state.playerModal
        },
        openPlayerLock:(state, action) => {
            state.lockation =action.payload
        },
        setPlayerVideos: (state, action) => {
            if(action.payload?.id){
                console.log("work")
                const findVideo = action.payload.data.find((item:TopVideo)=>(
                    item.id === action.payload.id
                ))
                const newVideo = action.payload.data.filter((item:TopVideo)=>(
                    item.id!== action.payload.id
                ))
                state.data = [findVideo, ...newVideo]
            }else{
                console.log("work")
                state.data = action.payload.data 
            }
        },
        setLikeVideo: (state, action) => {
            let item = state.data.find((i:TopVideo) => i.id === action.payload.id)
            item.like_count = action.payload.like
        }
    }
}) 

export const {setPlayerModal, setPlayerVideos, setLikeVideo, openPlayerLock} = playerSlice.actions

export default playerSlice.reducer

export const SelectPlayerModal = (state:RootState) => state.player.playerModal
export const VideoData = (state:RootState) => state.player.data
export const SlctPlayerOpenLock = (state:RootState) => state.player.lockation