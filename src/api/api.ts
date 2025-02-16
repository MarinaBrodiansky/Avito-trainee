/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
});

// Получение всех объявлений
export const getProducts = async () => {
    const response = await api.get('/items');
    return response.data;
};

// Получение объявления по ID
export const getProductById = async (id: string) => {
    const response = await api.get(`/items/${id}`);
    return response.data;
};

// Создание нового объявления
export const createProduct = async (productData: any) => {
    const response = await api.post('/items', productData);
    return response.data;
};

// Обновление объявления по ID
export const updateProduct = async (id: string, productData: any) => {
    const response = await api.put(`/items/${id}`, productData);
    return response.data;
};

// Удаление объявления по ID
export const deleteProduct = async (id: string) => {
    await api.delete(`/items/${id}`);
};
