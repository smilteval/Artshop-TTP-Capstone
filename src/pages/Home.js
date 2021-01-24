import React, { useEffect, useState } from 'react';

import Product from '../components/Product';

export default function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('http://localhost:1337/products');
            const data = await response.json();
            setProducts(data)
        }

        getProducts()
    }, []);




    return (
        <div className = 'product-list'>
            {products.map(product => (
                
                    <Product
                        title={product.title}
                        description={product.description}
                        url = {product.image && product.image.url}
                    />
                
            ))}

        </div>
    );
}
