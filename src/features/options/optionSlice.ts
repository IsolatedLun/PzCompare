import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { handleBar, showPopup } from "../../utils/funcs.js";
import { getObjs } from "../../utils/objApi.js";
import { isRejectedWithValue } from '@reduxjs/toolkit'

interface optionState {
    showAll: boolean;
    isFilter: boolean;
    filters: string[]
}

const initialState: optionState = {
    showAll: false,
    isFilter: false,
    filters: []
}

export const optionSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        toggleFilter(state) {
            state.isFilter = !state.isFilter;
        },

        toggleShowAll(state) {
            state.showAll = !state.showAll;
        },
        
        addFilter(state, action) {
            state.filters.push(action.payload);
        },

        removeFilter(state, action) {
            state.filters.splice(action.payload, 1);
        }
    },

    extraReducers: (builder) => {

    }
});

export default optionSlice.reducer
export const { toggleFilter, addFilter, removeFilter, toggleShowAll } = optionSlice.actions;