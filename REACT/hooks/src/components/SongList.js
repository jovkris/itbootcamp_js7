import React, { useState } from "react";
import NewSongForm from "./NewSongForm";

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: `shook ones`, id: 0 },
        { title: `juicy`, id: 1 },
        { title: `Hypnotize`, id: 2 }
    ]);

    const addSong = () => {
        setSongs([...songs, { title, id: songs.length + 1 }]);
    }
    return (
        <>
            <h2>My song song list</h2>
            {songs.map((song, i) => {
                return <li key={i}>{song.title}</li>
            })}
            <NewSongForm setSongs={addSong} />
        </>
    );
}

export default SongList;