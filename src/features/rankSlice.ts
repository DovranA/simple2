import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import axios from 'axios'
import { InitialRank } from '../types/topUsers'

const initialState: InitialRank = {
  usersActiveBtn: 0,
  dataUsers: {
    banner: {
      images: [],
    },
    userprofle: [],
  },
  dataVideos: {
    banner: {
      images: [],
    },
    videos: [],
  },
  videosActiveBtn: 0,
  loadUser: false,
  errorUser: null,
  loadVideo: false,
  errorVideo: null,
}

// const apiUrl = import.meta.env.VITE_API_PATH

export const handleUserFetch = createAsyncThunk(
  'users/topusers',
  async (type: string) => {
    try {
      const res = await axios.get('/api/users/topusers?type=' + type, {
        withCredentials: true,
      })
      return res.data
    } catch (error) {
      console.log(error)
      return error
    }
  }
)
export const handleVideosFetch = createAsyncThunk(
  'videos/topvideos',
  async (type: string) => {
    try {
      const res = await axios.get('/api/videos/topvideos?type=' + type, {
        withCredentials: true,
      })
      return res.data
    } catch (error) {
      console.log(error)
      return error
    }
  }
)

const rankSlice = createSlice({
  name: 'rank',
  initialState,
  reducers: {
    setUserActiveBtn: (state, action) => {
      state.usersActiveBtn = action.payload
    },
    setVideosActiveBtn: (state, action) => {
      state.videosActiveBtn = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleUserFetch.pending, (state) => {
        state.loadUser = true
      })
      .addCase(handleUserFetch.fulfilled, (state, action) => {
        state.dataUsers = action.payload
        state.loadUser = false
      })
      .addCase(handleUserFetch.rejected, (state, action) => {
        state.errorUser = action.payload
        state.loadUser = false
      })
      .addCase(handleVideosFetch.pending, (state) => {
        state.loadVideo = true
      })
      .addCase(handleVideosFetch.fulfilled, (state, action) => {
        state.dataVideos = action.payload
        state.loadVideo = false
      })
      .addCase(handleVideosFetch.rejected, (state, action) => {
        state.errorVideo = action.payload
        state.loadVideo = false
      })
  },
})

export const { setUserActiveBtn, setVideosActiveBtn } = rankSlice.actions

export default rankSlice.reducer

export const SlctUserActiveBtn = (state: RootState) => state.rank.usersActiveBtn
export const SlctVideosActiveBtn = (state: RootState) =>
  state.rank.videosActiveBtn
export const SlctUsersRankData = (state: RootState) => state.rank.dataUsers
export const SlctVideosRankData = (state: RootState) => state.rank.dataVideos
