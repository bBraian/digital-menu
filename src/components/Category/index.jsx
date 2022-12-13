import { useEffect, useState } from 'react';
import './style.css';
import { api } from '../../lib/axios';

export const Category = ({ categories, category, setCategory} ) => {
    const [categoryList, setCategoryList] = useState([]);

    async function getCategories() {
        const res = await api.get('/categories');

        setCategoryList(res.data);
    }

    useEffect(() => {
        getCategories();
    }, [])


    return (
        <div className='container-filter'>
            <ul className='category-slider'>
                {categories.map(cat => {
                    return (
                        <li key={cat.id} className={category == cat.id ? "category-selected" : "category" } onClick={() => setCategory(cat.id)}>{cat.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}