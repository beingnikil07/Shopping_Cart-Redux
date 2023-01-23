import { React, useEffect, useState } from 'react'
import { add } from '../store/cartSlice'; //import add from cartSlice
//iss hook ke through  hum apne action ko dispatch krr sakte hai.. 
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../store/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {

        dispatch(fetchProducts());    //hum redux mai thunk se api ko fetch kra rhe hai 
        // const fetchProducts = async () => {
        //     let res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // }
        // fetchProducts();
    }, []);


    //product received and we will store it to redux store 
    const handleAdd = (product) => {
        //dispatch ke through hum action ko dispatch karte hai aur action hamara add hai jo cartSlice 
        //se liya hai aur add payload ko push krr rha hai state mai dekhlo cartSlice file  mai 
        // payload hamara yha prr product ho lega 
        dispatch(add(product));

    }

    return (
        <div className='productsWrapper'>
            {
                products.map(product => (
                    <div className='card' key={product.id}>
                        <img src={product.image} alt="product image" />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button onClick={() => handleAdd(product)} className='btn'>Add Cart</button>
                    </div>
                ))

            }
        </div>
    )
}

export default Products
