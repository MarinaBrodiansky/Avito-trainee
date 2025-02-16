import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/api';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { Product } from '../../types/index'; 

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            if (id) {
                const fetchedProduct = await getProductById(id);
                setProduct(fetchedProduct);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Загрузка...</div>; 
    }

    return (
        <div className="product-detail-page">
            <ProductDetails product={product} />
        </div>
    );
};

export default ProductDetailPage;
