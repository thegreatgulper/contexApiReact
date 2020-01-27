import * as React from 'react';

const Button = (props) => {
    return (
        <button
            className="button"
            type="button"
            onClick={() => props.onAddCiggie(1)}
        >
            Click for each ciggie you didnt smoke
        </button>
    )
    
};

export default Button;