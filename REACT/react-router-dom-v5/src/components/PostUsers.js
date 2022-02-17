import React, { useState } from "react";
import API from "../config/api";

const PostUsers = () => {
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        API.post(`users`, { user: { name } }).then(res => {
            console.log(res);
            console.log(res.data);
        })

    }

    return <div>
        <form onSubmit={handleSubmit}>
            Person name:
            <input type="text" onChange={handleChange} />
            <button type="submit" >Add person</button>
        </form>
    </div>

}

export default PostUsers;