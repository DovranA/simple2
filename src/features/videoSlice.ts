import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { TopVideo } from '../types/topUsers'

const initialState: any = {
  data: [],
  playerModal: false,
  lockation: '',
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayerModal: (state) => {
      console.log(state.playerModal)
      state.playerModal = !state.playerModal
    },
    openPlayerLock: (state, action) => {
      state.lockation = action.payload
    },
    setPlayerVideos: (state, action) => {
      state.data = action.payload
    },
    setLikeVideo: (state, action) => {
      let item = state.data.find((i: TopVideo) => i.id === action.payload.id)
      item.like_count = action.payload.like
    },
  },
})

export const { setPlayerModal, setPlayerVideos, setLikeVideo, openPlayerLock } =
  playerSlice.actions

export default playerSlice.reducer

export const SelectPlayerModal = (state: RootState) => state.player.playerModal
export const VideoData = (state: RootState) => state.player.data
export const SlctPlayerOpenLock = (state: RootState) => state.player.lockation
