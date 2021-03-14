import React, { useState } from 'react';
import fakeData from '../../fakeData/data.json'
import Cart from '../Cart/Cart';

import './Search.css';

const Search = () => {
   
    const [cart, setCart] = useState([]);
    const handelSearch = (topic) => {
        let newCart = []
        fakeData.map(pd => {

            if (pd.topic.toLowerCase() === topic.toLowerCase()) {
                newCart.push(pd)
            }

        })


        setCart(newCart);
    }
    if(cart.length != 0){

        
        
    }
    
    

    return (
        <div>
            <div className="form">
                <input type="text" placeholder="Search.." onChange={event => { handelSearch(event.target.value) }}></input>

            </div>
            {
                cart.map(info => <Cart info={info} key={info.id}></Cart>)
            }

        </div>
    );
};

export default Search;