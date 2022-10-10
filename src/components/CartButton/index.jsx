import './style.css';
import { FaShoppingCart } from 'react-icons/fa';

export const CartButton = ({cart}) => {
    return (
        <div className='cart-button'>
            <div className='cart-text'>
                <span className='space'><FaShoppingCart /></span>
                <span className='space'>Ver pedido</span>
                <span className='cart-counter'>{cart.length}</span>
            </div>
        </div>
    )
}