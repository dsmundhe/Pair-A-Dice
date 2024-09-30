import { configureStore } from "@reduxjs/toolkit";
import stateSliceReducer from '../features/stateSlice/stateSlice' // Import the reducer from the slice file

const store = configureStore({
    reducer: stateSliceReducer, // Assign the reducer from stateSlice to a key (e.g., 'aashvi')
});

export default store;
