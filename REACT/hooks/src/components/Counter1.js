import React, { useEffect, useState } from "react";

const Counter1 = () => {
    const [state, setState] = useState({ counter: 4, color: `blue` });
    const { counter, color } = state;

    const handleDecrement = () => {
        // setCounter((prevState) => prevState - 1);
        setState((prevState) => {
            return { ...prevState, counter: prevState.counter - 1 }; // ovo uzima ceo state a update-uje samo counter
        })
    }

    // useEffect(() => {
    //     console.log(`Render`);
    // });

    // useEffect(() => {
    //     console.log(`render`);
    // }, []);

    // useEffect(() => {
    //     console.log(`renderrrrr`);
    // }, [state.color]);

    useEffect(() => {
        console.log(`hello world`);
        return () => {
            console.log(`do some cleanup`);
        }
    }, []);

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>{counter}</span>
            <span>{color}</span>
            <button>+</button>
            <button onClick={() => setState(prevState => {
                return { ...prevState, color: `red` }
            })}>change color</button>
        </div>
    );
}

export default Counter1;