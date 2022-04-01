import React, { useState } from 'react';
import UseMotos from '../../hooks/UseMoto';
import Card from '../Card/Card';
import Moto from '../Moto/Moto';
import './Home.css'

const Home = () => {
    const [motos, setMotos] = UseMotos();
    const [moto, setMoto] = useState([])
    /* add to selected product in add to card list and don't add same items in two times  */
    const handlerItems = (selectedItem) => {
        const exist = moto.find(moto => moto.id === selectedItem.id)
        if (!exist) {
            const newcart = [...moto, selectedItem]
            setMoto(newcart)
        }
        else {
            alert('this product is already added')
        }

    }
    /* remove selected product when i click in x btn */
    const handlerRemoveItems = (selectedItem) => {
        const rest = moto.filter(moto => moto.id !== selectedItem.id)
        setMoto(rest)

    }

    return (
        <div className='home-container'>
            <div className="moto-container">
                {
                    motos.map(moto => <Moto
                        key={moto.id}
                        moto={moto}
                        handlerItems={handlerItems}
                    ></Moto>)
                }
            </div>
            <div className="info-container">
                <Card moto={moto} handlerRemoveItems={handlerRemoveItems}></Card>
            </div>
        </div>
    );
};

export default Home;