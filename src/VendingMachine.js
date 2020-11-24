import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import VendingMachineItem from './VendingMachineItem';
import './VendingMachine.css';

const VendingMachine = ({ items }) => {

    return (
        <div className="VendingMachine">
            <BrowserRouter>
                <Route exact path="/">
                    <h1>Buy somethin' will ya!</h1>
                    <ul className="VendingMachine-items">
                        {items.map(item => (
                            <li key={item.id}>
                                <Link to={`/${item.id}`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Route>
                {items.map(item => (
                    <Route key={item.id} exact path={`/${item.id}`}>
                        <VendingMachineItem
                            name={item.name}
                            img={item.img}
                            backLink={<Link to='/'>Back</Link>}
                        />
                    </Route>
                ))}
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