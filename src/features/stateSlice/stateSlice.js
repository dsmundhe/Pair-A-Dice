import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "AT and DM"
}

const stateSlice = createSlice({
    name: "pair-a-dice",
    initialState,
    reducers: {
        addData: (state, action) => {
            // Update the name based on the action payload
            state.name = action.payload;
        }
    }
});

// Export the action
export const { addData } = stateSlice.actions;

// Export the reducer
export default stateSlice.reducer;
