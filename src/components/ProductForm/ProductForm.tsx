import React, { useState } from 'react';
import { createProduct } from '../../api/api';

const ProductForm = ({ refreshProducts }: { refreshProducts: () => void }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        location: '',
        type: 'Недвижимость',
        propertyType: '',
        area: 0,
        rooms: 0,
        brand: '',
        model: '',
        year: 0,
        mileage: 0,
        serviceType: '',
        experience: 0,
        cost: 0,
        workSchedule: '',
        image: '',
        price: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const newValue = name === 'area' || name === 'rooms' || name === 'year' || name === 'mileage' || name === 'experience' || name === 'cost' || name === 'price'
            ? Number(value)
            : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await createProduct(formData);
            console.log('Объявление создано');

            refreshProducts();

            setFormData({
                name: '',
                description: '',
                location: '',
                type: 'Недвижимость',
                propertyType: '',
                area: 0,
                rooms: 0,
                brand: '',
                model: '',
                year: 0,
                mileage: 0,
                serviceType: '',
                experience: 0,
                cost: 0,
                workSchedule: '',
                image: '',
                price: 0,
            });
        } catch (error) {
            console.error('Ошибка при создании объявления:', error);
            alert('Ошибка при создании объявления, проверьте поля формы.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Название" value={formData.name} onChange={handleChange} required />
            <input type="text" name="description" placeholder="Описание" value={formData.description} onChange={handleChange} required />
            <input type="text" name="location" placeholder="Локация" value={formData.location} onChange={handleChange} required />
            <select name="type" value={formData.type} onChange={handleChange} required>
                <option value="Недвижимость">Недвижимость</option>
                <option value="Авто">Авто</option>
                <option value="Услуги">Услуги</option>
            </select>

            {formData.type === 'Недвижимость' && (
                <>
                    <input type="text" name="propertyType" placeholder="Тип недвижимости" value={formData.propertyType} onChange={handleChange} required />
                    <input type="number" name="area" placeholder="Площадь" value={formData.area} onChange={handleChange} required />
                    <input type="number" name="rooms" placeholder="Количество комнат" value={formData.rooms} onChange={handleChange} required />
                    <input type="number" name="price" placeholder="Цена" value={formData.price} onChange={handleChange} required />
                </>
            )}

            {formData.type === 'Авто' && (
                <>
                    <input type="text" name="brand" placeholder="Марка автомобиля" value={formData.brand} onChange={handleChange} required />
                    <input type="text" name="model" placeholder="Модель автомобиля" value={formData.model} onChange={handleChange} required />
                    <input type="number" name="year" placeholder="Год выпуска" value={formData.year} onChange={handleChange} required />
                    <input type="number" name="mileage" placeholder="Пробег (км)" value={formData.mileage} onChange={handleChange} />
                </>
            )}
            
            {formData.type === 'Услуги' && (
                <>
                    <input type="text" name="serviceType" placeholder="Тип услуги" value={formData.serviceType} onChange={handleChange} required />
                    <input type="number" name="experience" placeholder="Опыт работы (года)" value={formData.experience} onChange={handleChange} required />
                    <input type="number" name="cost" placeholder="Стоимость услуги" value={formData.cost} onChange={handleChange} required />
                    <input type="text" name="workSchedule" placeholder="График работы" value={formData.workSchedule} onChange={handleChange} required/>
                </>
            )}

            <button type="submit">Создать объявление</button>
        </form>
    );
};

export default ProductForm;

