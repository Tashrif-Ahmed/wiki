import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import "./Cart.css";
const Cart = (props) => {
    const { topic, name, dis, id } = props.info;
    return (
        <div className="mainCart">
            <div className="cart">
                <h2>{topic}</h2>
                <h4>By: {name}</h4>
            </div>
            <Link style={{"color":"black"}} to={"/result/"+id}><Button variant="contained">Learn more</Button></Link>
        </div>

    );
};

export default Cart;