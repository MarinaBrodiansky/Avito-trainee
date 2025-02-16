import React, { useEffect, useState } from 'react';
import { getProducts } from '../../api/api';
import { Link } from 'react-router-dom';
import { Product } from '../../types/index';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts: Product[] = await getProducts();
            setProducts(fetchedProducts);
        };

        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    return (
        <>
            <input
                type="text"
                placeholder="Поиск по названию"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <ul>
                {currentProducts.map(product => (
                    <li key={product.id}>
                        <Link to={`/item/${product.id}`}>
                            {product.name} - {product.location} - {product.type}
                        </Link>
                    </li>
                ))}
            </ul>
           
            <div>
                {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }, (_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    );
};

export default ProductList;
