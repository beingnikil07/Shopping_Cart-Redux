const { createSlice } = require("@reduxjs/toolkit");      //Import slice from redux toolkit

const initialState = [];   //set initialize state to empty array


//createSlice() mai humko ek object pass karna hota hai
//humne phir initialState ko pass kiya aur reducers mai humne functions create kiye jiski help se 
//hum log state ko change krr payenge...
//reducers pure functions hoti hai jiski help se hum state ko change karte hai ,pure functions 
//mean ye function se bahar ka data ko change nhi karti matlab koi side-effet nhi hota
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            //ye jo state hai ye basically initialState wala he state hai jo upper declared hai
            //initialState ek array hai aur hum push ke through data array mai push krr rhe hai
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    },
})

/* Pehle humko actions ko alag se banana padta hai redux core mai but ye createSlice() 
hamare liye kya karta hai humko bss functions banani hoti hai jaise upper hai ye hamare liye 
actions bhi create  karta hai reducers bhi */

export const { add, remove } = cartSlice.actions;  //exporting actions 
export default cartSlice.reducer;             //exporting reducers


