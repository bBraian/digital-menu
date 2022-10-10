import './style.css';
import { Header } from '../../components/Header';
import { Product } from '../../components/Product';
import { CartButton } from '../../components/CartButton';
import { ModalAddProduct } from '../../components/ModalAddProduct';
import React, { useState, useEffect } from 'react';
import { Category } from '../../components/Category';

export const Home = ({bar}) => {
    const [category, setCategory] = useState(1);
    const [cart, setCart] = useState([]);
    const [modalAddProduct, setModalAddProduct] = useState(false);
    const [currentModalItem, setCurrentModalItem] = useState([])

    useEffect(() => {
        modalAddProduct == true ? document.getElementById('doc_html').style.overflow = 'hidden'
        : document.getElementById('doc_html').style.overflowY = 'auto'
    }, [modalAddProduct])
    
    return (
        <div>
            <div className='fixed-header'>
                <Header bar={bar} />
                <Category categories={bar.categories} category={category} setCategory={setCategory} />
            </div>
            <div className='container-category-title'>
                <div className='category-title'>{bar.categories[category -1].name}</div>
            </div>
            <div className='container-products'>
                <div className='products'>
                    { bar.products.map(prod => { 
                        return (
                            prod.categoryId === category ?
                            <div key={prod.id}>
                                <Product prod={prod} openModal={setModalAddProduct} setModalProduct={setCurrentModalItem} />
                                <div className='line'></div>
                            </div>
                            : ""
                        )
                    })}
                </div>
            </div>
            {cart.length === 0 ? "" : <CartButton cart={cart} />}
            {modalAddProduct ? <ModalAddProduct setVisible={setModalAddProduct} product={currentModalItem} setCart={setCart} cart={cart} /> : ""}
        </div>
    );
}