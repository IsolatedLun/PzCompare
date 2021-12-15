import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameObjects } from "../../interfaces/interfaces";
import { handleBar, showPopup } from "../../utils/funcs";
import { getObjs } from "../../utils/objApi";

const initialState: GameObjects = {
    "items": [],
    "diffs": [],

    "status": "idle"
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

            state.items = [action.payload[0], action.payload[1]]
            state["diffs"] = action.payload["diffs"];
            state['status'] = 'fulfilled';
        }),

        builder.addCase(fetchObjs.rejected, (state, action: any) => {
            handleBar(true);
            const err: string = action.payload !== undefined
                ? action.payload  : 'Something went wrong'

            showPopup(err);
            
            state['status'] = 'rejected';
        })
    }
});

export default objSlice.reducer