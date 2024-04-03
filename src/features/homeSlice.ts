import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

const initialState = {
    playerModal: false
}

const homeSlice = createSlice({
    name:"home",
    initialState,
    reducers:{
        switchPlayerModal: (state) => {
            state.playerModal = !state.playerModal
        }
    }
})

export const {
    switchPlayerModal
} = homeSlice.actions

export default homeSlice.reducer

export const SelectPlayerModal = (state:RootState) => state.home.playerModal