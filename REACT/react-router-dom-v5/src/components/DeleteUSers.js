import React, { useState, useEffect } from "react";
import API from "../config/api";

const DeleteUsers = () => {

    const [id, setId] = useState("");

    const handleChange = (event) => {
        setId(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userID = id;
        const response = await API.delete(`users/${userID}`);
        console.log(response);
        console.log(response.data);
    }


    return <div>
        <h4>Delete USers:</h4>
        <form onSubmit={handleSubmit}>
            <label>
                User id: <input type="text" onChange={handleChange} />
            </label>
            <button type="submit">Delete</button>
        </form>
    </div>
}

export default DeleteUsers;