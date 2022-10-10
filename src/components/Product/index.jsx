import './style.css';

export const Product = ({prod, openModal, setModalProduct}) => {
    const handleOpenModal = (prod) => {
        openModal(true);
        setModalProduct(prod)
    }

    return (
        <div className='product'>
            <div className='col-img'>
                <div className='product-image' style={{backgroundImage: `url(${prod.image})`}}></div>
            </div>
            <div className='col-text'>
                <div>
                    <div className='product-title'>{prod.name}</div>
                    <div className='product-description'>{prod.description}</div>
                </div>
                
                <div className='product-price-btn'>
                    <div className='product-price'>R$ {prod.price}</div>
                    <button className='product-button' onClick={() => handleOpenModal(prod)}>+</button>
                </div>
            </div>
        </div>
    );
}