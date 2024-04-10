import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import axios from 'axios'
import { InitialHome } from '../types/home'
import { TopVideo } from '../types/topUsers'

const initialState: InitialHome = {
  playerModal: false,
  loading: false,
  error: null,
  data: {
    banner: {
      images: [],
    },
    brands: {
      image: '',
      total: 0,
    },
    topvideos: {
      image: '',
      total: 0,
    },
    topusers: {
      image: '',
      total: 0,
    },
    trends: {
      image: '',
      total: 0,
    },
    totalvideos: {
      image: '',
      total: 0,
    },
    saylananlar: {
      details: [],
      total: 0,
    },
    pinnedVideos: {
      detail: [],
      total: 0,
    },
  },
}

// const apiUrl = import.meta.env.VITE_API_PATH

export const mainPageFetch = createAsyncThunk('homepage', async () => {
  try {
    const res = await axios.get('/api/videos/mainpage', {
      withCredentials: true,
    })
    return res.data
  } catch (error) {
    console.log(error)
    return error
  }
})

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    switchPlayerModal: (state) => {
      state.playerModal = !state.playerModal
    },
    setPinnedLike: (state, action) => {
      let item = state.data.pinnedVideos.detail.find(
        (i: TopVideo) => i.id === action.payload.id
      )
      item.like_count = action.payload.like
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(mainPageFetch.pending, (state) => {
        state.loading = true
      })
      .addCase(mainPageFetch.fulfilled, (state, action) => {
        state.loading = false

        state.data = action.payload
      })
      .addCase(mainPageFetch.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { switchPlayerModal, setPinnedLike } = homeSlice.actions

export default homeSlice.reducer

export const SelectHomeData = (state: RootState) => state.home.data

export const SelectHomeLoading = (state: RootState) => state.home.loading
