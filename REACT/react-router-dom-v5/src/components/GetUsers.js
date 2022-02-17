import Ract, { useState, useEffect } from "react";
import API from "../config/api";

const GetUsers = () => {
    const [users, setUSers] = useState([]);

    useEffect(() => {
        const users = API.get("users").then(res => {
            setUSers(res.data)
        })
    }, []);


    return <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>

}

export default GetUsers;