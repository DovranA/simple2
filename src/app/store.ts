import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "../features/homeSlice"
import RankReducer from "../features/rankSlice"
import PlayerReducer from "../features/videoSlice"
export const store = configureStore({
    reducer:{  
        home: HomeReducer,
        rank: RankReducer,
        player: PlayerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch