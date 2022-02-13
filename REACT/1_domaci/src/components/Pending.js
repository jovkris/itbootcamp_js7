import React from "react";

const Pending = ({ todos }) => {
    return (
        <>
            <p>Number of pending todos is: {todos.length}</p>
        </>
    )
}

export default Pending;