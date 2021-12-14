import { configureStore } from "@reduxjs/toolkit";
import { objSlice } from "./features/objs/objSlice.js";
import { optionSlice } from "./features/options/optionSlice.js";

export const store = configureStore({
    reducer: {
        objs: objSlice.reducer,
        options: optionSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;