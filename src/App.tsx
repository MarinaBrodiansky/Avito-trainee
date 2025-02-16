import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListPage from './pages/ProductList/ProductListPage';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';
import ProductFormPage from './pages/ProductForm/ProductFormPage';

const App = () => {
    return (
        <Router>
            <Routes>                
                <Route path="/list" element={<ProductListPage />} />
                <Route path="/item/:id" element={<ProductDetailPage />} />
                <Route path="/form" element={<ProductFormPage />} />
            </Routes>
        </Router>
    );
};

export default App;
