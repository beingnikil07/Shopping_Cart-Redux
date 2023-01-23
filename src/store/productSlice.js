const { createSlice } = require("@reduxjs/toolkit");

const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },

    reducers: {
        setProducts(state, action) {
            // Never do like this ,becz reducres cannot perform asynchronous actions .Reducers
            //are synchronous that's why.
            //Do not do this ..Never 
            // let res = await fetch('https://fakestoreapi.com/products');
            state.status = action.payload;
        },
        setStatus(state, action) {

        }
    },
})

export const { setProducts, setStatus } = productSlice.actions; //hum setProducts ko iss component mai bhi use krr sakte hai
//kyuki humne isko destructure kiya hai 
export default productSlice.reducer;

//Thunks 
/*
Redux Thunk is a middleware that lets you call action creators that return 
a function instead of an action object.That function receives the store's dispatch
method, which is then used to dispatch regular synchronous actions inside the function's
body once the asynchronous operations have been completed.

*/

export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING)); //request start hone se pehle humne status set kiya 
        try {
            let res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE));   //data mil gya isliye status idle krr diya
        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}
