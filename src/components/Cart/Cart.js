import React from 'react';
import "./Cart.css";
const Cart = (props) => {
    const {topic , name , dis} = props.info;
    return (
        <div className="cart">
            <h2>{topic}</h2>
            <h4>Written by or taken from: {name}</h4>
            <p>{dis}</p>
        </div>
    );
};

export default Cart;