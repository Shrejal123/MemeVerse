import { configureStore } from "@reduxjs/toolkit";
import memeReducer from "./memeSlice";  // Import your reducers (example)

const store = configureStore({
  reducer: {
    memes: memeReducer,  // Add reducers here
  },
});

export default store;
