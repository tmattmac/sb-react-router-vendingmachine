import React from 'react';
import { useParams } from 'react-router-dom';
import './VendingMachineItem.css';

const VendingMachineItem = ({ items, backLink }) => {

    const { id } = useParams();

    const item = items.find(item => item.id === id);

    return (
        <div className="VendingMachineItem">
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            {backLink}
        </div>
    )
}

export default VendingMachineItem;