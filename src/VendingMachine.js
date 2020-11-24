import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import VendingMachineItem from './VendingMachineItem';
import './VendingMachine.css';

const VendingMachine = ({ items }) => {

    const itemList = (
        <ul className="VendingMachine-items">
            {items.map(item => (
                <li key={item.id}>
                    <Link to={`/${item.id}`}>
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );

    const backLink = <Link to="/">Go Back</Link>;

    return (
        <div className="VendingMachine">
            <BrowserRouter>
                <Route exact path="/">
                    <h1>Buy somethin' will ya!</h1>
                    {itemList}
                </Route>
                <Route exact path="/:id">
                    <VendingMachineItem items={items} backLink={backLink} />
                </Route>
            </BrowserRouter>
        </div>
    )
}

VendingMachine.defaultProps = {
    items: [
        { id: "coke", name: "Coca-Cola", img: "https://www.kroger.com/product/images/xlarge/front/0004900000463" },
        { id: "chips", name: "Lay's Potato Chips", img: "https://www.kroger.com/product/images/xlarge/front/0002840020060" },
        { id: "sardines", name: "King Oscar Sardines", img: "https://www.kroger.com/product/images/large/front/0003480000107" }
    ]
};

export default VendingMachine;