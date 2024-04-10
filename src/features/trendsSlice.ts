import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import axios from 'axios'
import { InitialTrends } from '../types/trends'

const initialState: InitialTrends = {
  loading: false,
  error: null,
  data: {
    banner: {
      images: [],
    },
    totalTrends: 0,
    videos: [],
  },
}
type trendsFetch = {
  by: string
  startfrom: number
  limit: number
}
export const trendsPageFetch = createAsyncThunk(
  'trends',
  async ({ by, startfrom, limit }: trendsFetch) => {
    try {
      const res = await axios.get(
        `/api/videos/trends?by=${by}&startfrom=${startfrom}&limit=${limit}`,
        {
          withCredentials: true,
        }
      )
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error)
      return error
    }
  }
)

const trendsSlice = createSlice({
  name: 'trends',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(trendsPageFetch.pending, (state) => {
        state.loading = true
      })
      .addCase(trendsPageFetch.fulfilled, (state, action) => {
        state.loading = false

        state.data = action.payload
      })
      .addCase(trendsPageFetch.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const {} = trendsSlice.actions

export default trendsSlice.reducer

export const SelectTrendsData = (state: RootState) => state.trends.data

export const SelectTrendsLoading = (state: RootState) => state.trends.loading
