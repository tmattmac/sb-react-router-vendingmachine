import React from 'react';
import './VendingMachineItem.css';

const VendingMachineItem = ({ name, img, backLink }) => {
    return (
        <div className="VendingMachineItem">
            <img src={img} alt={name} />
            <h2>{name}</h2>
            {backLink}
        </div>
    )
}

export default VendingMachineItem;