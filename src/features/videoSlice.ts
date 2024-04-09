import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

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
        }
    }
}) 

export const {setPlayerModal} = playerSlice.actions

export default playerSlice.reducer

export const SelectPlayerModal = (state:RootState) => state.player.playerModal