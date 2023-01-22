import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
                <span className='cartCount'>Cart Items:0</span>
            </div>
        </div>
    )
}

export default Navbar;