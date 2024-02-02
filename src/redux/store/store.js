import { configureStore } from "@reduxjs/toolkit";
import { mobileReducer } from "../features/mobileSlice/mobileSlice";

export default configureStore({
    reducer: {
        mobiles: mobileReducer,
    }
})