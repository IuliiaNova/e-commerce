import React, { useState } from 'react';

export const Counter = () => {

    const [count, setCount] = useState(0);


    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleChange = (event) => {
        setCount(parseInt(event.target.value));
    };

    const handleRemove = () => {
        setCount(0);
    };


    return (
        <div>
            <button onClick={handleRemove}>Remove</button>
            <button onClick={handleDecrement}>-</button>
            <input type="text" value={count} onChange={handleChange} />
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}

export default Counter;

