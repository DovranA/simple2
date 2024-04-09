import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { TopVideo } from "../types/topUsers";

type InitalVideos = {
    data: TopVideo[] | []
}

const initialState:any = {
    data: [],
    playerModal: false,
}



const playerSlice = createSlice({
    name:"player",
    initialState,
    reducers:{
        setPlayerModal: (state) => {
            state.playerModal = !state.playerModal
        },
        setPlayerVideos: (state, action) => {
            state.data = action.payload 
        },
        setLikeVideo: (state, action) => {
            let item = state.data.find((i:TopVideo) => i.id === action.payload.id)
            item.like_count = action.payload.like
        }
    }
}) 

export const {setPlayerModal, setPlayerVideos, setLikeVideo} = playerSlice.actions

export default playerSlice.reducer

export const SelectPlayerModal = (state:RootState) => state.player.playerModal
export const VideoData = (state:RootState) => state.player.data