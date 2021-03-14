import React from 'react';
import './SearchDetails.css'
import { useParams } from 'react-router';
import fakeData from '../../fakeData/data.json'
const SearchDetails = () => {
    const {productId} = useParams()
    let result = fakeData.find(pd => pd.id == productId);
    console.log(result);
    
    return (
        <div className="result">
            <div className="resultInfo">
            <h1>{result.topic}</h1>
            <h2>By: {result.name}</h2>
            </div>
            <h3>{result.dis}</h3>
        </div>
        
    );
};

export default SearchDetails;