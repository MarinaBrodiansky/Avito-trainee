import React, { useCallback } from 'react';
import ProductForm from '../../components/ProductForm/ProductForm';
import { getProducts } from '../../api/api';

const ProductFormPage: React.FC = () => {
    const refreshProducts = useCallback(async () => {
       
        const products = await getProducts();
        console.log('Products refreshed', products);
        
    }, []);

    return (
        <div className="product-form-page">
            <ProductForm refreshProducts={refreshProducts} />
        </div>
    );
};

export default ProductFormPage;
