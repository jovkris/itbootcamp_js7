import React from "react";
import Todo from "./Todo.js";

const TodoList = ({ todos, handleDelete }) => {
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} handleDelete={handleDelete} />
            ))}
        </ul>
    )
}

export default TodoList;