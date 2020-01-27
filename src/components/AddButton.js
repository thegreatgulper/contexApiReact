import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Button = (props) => {
    const { deposit } = useContext(AppContext);
    return (
        <button
            className="button"
            type="button"
            onClick={() => deposit(1)}
        >
            Click for each ciggie you didnt smoke
        </button>
    )
    
};

export default Button;