import { configureStore } from "@reduxjs/toolkit";
import carta_slice  from "./carta_slice";


export const store = configureStore({
  reducer:{
    carta:carta_slice
  }
})