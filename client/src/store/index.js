import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    componentDataSlice: userSlice,
  },
});

export default store;
