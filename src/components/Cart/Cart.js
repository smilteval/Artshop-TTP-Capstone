import React, { useState } from 'react'

export default function Cart() {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        console.log("item added to cart");
    }
    return (
        <div>
           
        </div>
    )
}
