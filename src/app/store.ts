import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "../features/homeSlice"
export const store = configureStore({
    reducer:{  
        home: HomeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch