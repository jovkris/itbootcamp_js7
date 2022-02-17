import React, { useState, useEffect } from "react";

const Select = () => {

    const [state, setState] = useState(`posts`);
    const [items, setItems] = useState([]);

    const handleChange = (e) => {
        setState(e.target.value);
    }
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${state}`)
            .then((response) => response.json())
            .then((json) => setItems(json));

    }, [state]);
    return <>
        <form>
            <select value={state} onChange={handleChange}>
                <option value="posts">posts</option>
                <option value="comments">comments</option>
                <option value="albums">albums</option>
            </select>
        </form>

        <ul>
            {
                items.map((item, i) => {
                    return <li key={i}>{JSON.stringify(item)}</li>
                })
            }
        </ul>
    </>
}

export default Select;
