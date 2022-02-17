import React, { useState } from "react";


const Counter = () => {
    const [counter, setCounter] = useState(() => {
        console.log(`run function`);
        return 4;
    });

    const handleDecrement = () => {
        setCounter((prevState) => prevState - 1);
    }
    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
}

export default Counter;