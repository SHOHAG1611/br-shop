import React from 'react';

const Card = ({ moto, handlerRemoveItems }) => {
    return (
        <div>
            <h1>Moto :{moto.length}</h1>
            {moto.map(moto => <p>
                {moto.name}
                <button onClick={() => handlerRemoveItems(moto)}>X</button>
            </p>)}
        </div>
    );
};

export default Card;