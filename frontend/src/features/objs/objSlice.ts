import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { handleBar, showPopup } from "../../utils/funcs";
import { getObjs } from "../../utils/objApi";

interface ObjState {
    data: {};
}

const initialState: ObjState = {
    data: {}
}

export const fetchObjs = createAsyncThunk(
    'objs/fetchObjs',
    async(args: any, { rejectWithValue }) => {
        const { objs, showAll } = args
        
        try {
            const res = await getObjs(objs[0], objs[1], showAll);
            return res.data;
        }

        catch(err: any) {
            return rejectWithValue(err.response.data['detail'])
        }

    }
)

export const objSlice = createSlice({
    name: 'objects',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(fetchObjs.pending, () => {
            handleBar();
        }),

        builder.addCase(fetchObjs.fulfilled, (state, action) => {
            handleBar(true);
            state.data = action.payload;
        }),

        builder.addCase(fetchObjs.rejected, (state, action: any) => {
            handleBar(true);
            showPopup(action.payload);
        })
    }
});

export default objSlice.reducer