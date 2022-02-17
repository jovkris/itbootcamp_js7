import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";


const UserDetails = () => {
    const { id } = useParams();
    const { users } = useContext(UserContext);
    const [user, setUser] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        // filter vraca niz
        // const user = users.filter(user => user.id === parseInt(id))[0];

        // find vraca objekat i to samo jedan.
        const user1 = users.find(user => user.id === parseInt(id));
        setUser(user1);
    }, []);

    const handleHomeButton = () => {
        navigate("/");
    }
    const handleBackButton = () => {
        navigate(-1);
    }


    return (

        <div>

            <button onClick={handleHomeButton}>Home</button>
            <button onClick={handleBackButton}>Back</button>
            {
                user ? (<div>
                    <p>name: {user.name}</p>
                    <p>email: {user.email}</p>
                    <p>website: {user.website}</p>
                </div>) : <div>We can't find user</div>
            }
        </div>
    )
}

export default UserDetails;