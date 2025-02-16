import React from 'react';
import { Product } from '../../types/index';
import './ProductDetails.css';

interface ProductDetailsProps {
    product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    return (
        <div className="product-detail">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Location: {product.location}</p>
            <p>Type: {product.type}</p>
            <p>Price: {product.price ? `${product.price}$` : 'N/A'}</p>
        </div>
    );
}

export default ProductDetails;