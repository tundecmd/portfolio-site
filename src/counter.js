import React from 'react';

const Counter = ({count, handleCount}) => {
    return (
        <div>
            <button onClick={handleCount}>+</button>
            <span>{count}</span>
            <button>-</button>
        </div>
    );
}
 
export default Counter;