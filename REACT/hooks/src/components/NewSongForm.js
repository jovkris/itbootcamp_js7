import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {

    const [title, setTitle] = useState(``);

    // const addSong = () => {
    //     // props.setSong([...props.songs, { title: title, id: props.length + 1 }])
    //     props.setSong([...props.songs, { title, id: props.length + 1 }])
    //     // kada se isto zovu ne mora da se ponavlja vrednost nego samo title ovde u ovom primeru
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title)
    }




    return <form style={{ marginTop: 20 }} onSubmit={handleSubmit}>
        <label>Song name: </label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <input type="submit" value="add" />
    </form >;
}

export default NewSongForm;