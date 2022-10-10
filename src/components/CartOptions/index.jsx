import { useEffect, useState } from 'react';
import './style.css';

export const CartOptions = ({title, description, options, price, setPrice, setOptionsSelected, optionsSelected}) => {
    const [option, setOption] = useState([]);

    useEffect(() => {
        setOption(options);
    }, [])

    const handleAddOption = (e, opt) => {
        if(e.target.checked) {
            setPrice(price + parseFloat(opt.price))
            let newList = [...optionsSelected];
            newList.push(opt);
            setOptionsSelected(newList);
        } else {
            setPrice(price - parseFloat(opt.price))
            setOptionsSelected(optionsSelected.filter(optSelected => optSelected.id !== opt.id))
        }
    }
    
    return (
        <div className='cart-otions-container'>
            <div className='cart-o-title'>{title}</div>
            <div className='cart-o-description'>{description}</div>
            <div className='cart-o-container-options'>
                {option.map(opt => {
                    return (
                        <div className='cart-o-option' key={opt.id}>
                            <input type={'checkbox'} className='cart-o-option-checkbox' onClick={(e) => handleAddOption(e, opt)} />
                            <div className='flex-column'>
                                <div className='cart-o-option-title'>{opt.title}</div>
                                <div className='cart-o-option-price'>+ R$ {opt.price}</div>
                        </div>
                </div>
                    )
                })}
                
            </div>
        </div>
    )
}