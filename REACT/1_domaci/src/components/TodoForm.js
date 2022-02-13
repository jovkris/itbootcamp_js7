import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";


function TodoForm({ addTodo }) {

    const [todo, setTodo] = useState({
        id: ``,
        task: ``
    });

    const handleInput = (event) => {
        setTodo({ ...todo, task: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() });
            setTodo({ ...todo, task: "" });
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={todo.task} onChange={handleInput} />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm;