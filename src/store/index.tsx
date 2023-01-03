import { configureStore } from "@reduxjs/toolkit";
import homerReducer from "../reducer/homeReducer";

export const store = configureStore({
    reducer: {
        homerReducer: homerReducer
    }
})

