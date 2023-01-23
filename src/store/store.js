import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import productReducer from './productSlice';
//configuring store
const store = configureStore({
    reducer: {
        //Hum yha prr register karte hain store mai 
        cart: cartReducer,            //registering cart
        product: productReducer,       //registering product 
    }
});

export default store;