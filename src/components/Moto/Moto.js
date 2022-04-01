import React from 'react';
import './Moto.css'

const Moto = ({ handlerItems, moto }) => {
    const { name, id, img, price, } = moto;
    return (
        <div className='moto-conainer'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: ${price}</h5>
            <p> Moto Id:{id}</p>
            <button onClick={() => handlerItems(moto)} className='add-to-card'>Add to Card</button>
        </div>
    );
};

export default Moto;