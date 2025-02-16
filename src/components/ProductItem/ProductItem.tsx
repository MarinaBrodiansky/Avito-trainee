import React from 'react';
import { Product } from '../../types/index';
import './ProductItem.css';

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <div className="product-item">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Location: {product.location}</p>
            <p>Type: {product.type}</p>
            <p>Price: {product.price ? `${product.price}$` : 'N/A'}</p>
        </div>
    );
}

export default ProductItem;
