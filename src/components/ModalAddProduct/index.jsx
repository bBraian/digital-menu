import './style.css';
import { VscChromeClose } from 'react-icons/vsc';
import { CartOptions } from '../CartOptions';
import { useEffect, useState } from 'react';
import { cartoptions } from '../../data/cartoptions';

export const ModalAddProduct = ({setVisible, product, setCart, cart}) => {
    const [quantityProducts, setQuantityProducts] = useState(1);
    const [finalPrice, setFinalPrice] = useState(parseFloat(product.price));
    const [options, setOptions] = useState([]);
    const [optionsSelected, setOptionsSelected] = useState([])
    const [comments, setComments] = useState('');

    useEffect(() => {
        setOptions(cartoptions.filter(opt => opt.category == product.categoryId))
    }, [])

    const handleSetQuantityProducts = (operator) => {
        if(operator == "+") {
            if(quantityProducts === 8) {
                alert("Quantidade máxima do pedido é 8!")
            } else {
                setQuantityProducts(quantityProducts+1);
                setFinalPrice(parseFloat(finalPrice) + parseFloat(product.price));
            }
        } else if(operator == "-") {
            if(quantityProducts != 1) {
                setQuantityProducts(quantityProducts-1)
                setFinalPrice(finalPrice - product.price);
            } 
        }
    }

    const handleCloseModal = (e) => {
        if(e.target.id === 'over') setVisible(false)
    }

    const handleAddToCart = (prod) => {
        setVisible(false);
        prod.price = finalPrice;
        prod.options = optionsSelected;
        prod.comments = comments;
        let newList = [...cart];
        newList.push(prod);
        setCart(newList);
    }

    console.log(optionsSelected);
    return (
        <div className='overlay' id='over' onClick={handleCloseModal}>
            <div className='modal-add-product'>
                <div className='section-modal-image'>
                    <img src={product.image} alt="oi" className='image-modal' />
                    <div className='modal-box-close-icon' onClick={() => setVisible(false)}><VscChromeClose className='modal-close-icon' /></div>
                </div>
                <div className='section-modal-form'>
                    <div className='modal-block-infos'>
                        <div className='modal-p-name'>{product.name}</div>
                        <div className='modal-p-description'>{product.description}</div>
                        <div className='modal-p-price'>R$ {product.price}</div>
                    </div>
                    {options.map(opt => {
                        return (
                            <div style={{width: '100%'}} key={opt.id}>
                                <div className='modal-add-separator'></div>
                                <CartOptions 
                                    optionsSelected={optionsSelected}
                                    setOptionsSelected={setOptionsSelected}
                                    title={opt.title} 
                                    description={opt.description} 
                                    options={opt.options} 
                                    price={finalPrice} 
                                    setPrice={setFinalPrice} 
                                />
                            </div>
                        )
                    })}

                    <div className='section-modal-comments'>
                        <div className='modal-comments-title'>Comments</div>
                        <textarea onChange={(e) => setComments(e.target.value)} className='modal-comments-input' rows="2" type="text" value={comments}></textarea>
                    </div>
                </div>
                <div className='section-buttons-addtocart'>
                    <div className='more-less-modal-button'>
                        <button className='modal-button-minus' onClick={() => handleSetQuantityProducts('-')}>-</button>
                        <div className='modal-product-qtd'>{quantityProducts}</div>
                        <button className='modal-button-plus' onClick={() => handleSetQuantityProducts('+')}>+</button>
                    </div>
                    <button className='button-addtocart' onClick={() => handleAddToCart(product)}>Add R$ {finalPrice.toFixed(2)}</button>
                </div>
            </div>
        </div>
    )
}