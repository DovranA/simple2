import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "../features/homeSlice"
import RankReducer from "../features/rankSlice"
export const store = configureStore({
    reducer:{  
        home: HomeReducer,
        rank: RankReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch