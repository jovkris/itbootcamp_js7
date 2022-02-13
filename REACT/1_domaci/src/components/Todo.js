import React from "react";

const Todo = ({ todo, handleDelete }) => {


    const handleDeleteClick = () => {
        handleDelete(todo.id);
    }

    return (
        <div style={{ display: "flex" }}>
            <li style={{ listStyleType: "none" }}>{todo.task}</li>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}

export default Todo;