import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';   //named export tha isliye kisi bhi name se import krr sakta hu

//configuring store
const store=configureStore({
     reducer:{
         cart:cartReducer, 
     } 
});

export default store;