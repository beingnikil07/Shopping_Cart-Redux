import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    //useSelector hook under the hook data ko subscribe karke rakhta hai mean agar value change 
    //hoti hai to ye humko changed values he dega 
    // ye jo state le rha hai arrow fun mai ye hamari puri application ke states hai na kii 
    //sirf cart kii 
    // ye hook jo function liye hai isme  he aapko batana hota hai konsi state ko aap log
    //subscribe karke rakhna chahte hai 
    const Items = useSelector((state) => state.cart);

    return (
        <div>
            <span className='logo' style={{ display: 'flex', alignItems: 'center', justifyContent: "flex-start" }}>REDUX STORE</span>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
            }}>
                <Link className='navLink' to="/">Home</Link>
                <Link className='navLink' to="/cart">Cart</Link>
                <span className='cartCount'>Cart Items:{Items.length}</span>
            </div>
        </div>
    )
}

export default Navbar;