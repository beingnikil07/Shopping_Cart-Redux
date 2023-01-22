import { React, useEffect, useState } from 'react'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            //Hum yha api ko fetch ke through fetch krr rhe hai 
            let res = await fetch('https://fakestoreapi.com/products');
            //Fetch humko string mai data deta hai ,so i have to convert it to json.
            const data = await res.json();
            console.log(data);
        }
        //calling function
        fetchProducts();
    }, [])

    return (
        <div>
            Products
        </div>
    )
}

export default Products
