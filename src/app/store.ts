import { configureStore } from '@reduxjs/toolkit'
import HomeReducer from '../features/homeSlice'
import TrendsReducer from '../features/trendsSlice'
import RankReducer from '../features/rankSlice'
export const store = configureStore({
  reducer: {
    home: HomeReducer,
    rank: RankReducer,
    trends: TrendsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
