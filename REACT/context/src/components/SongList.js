import React, { useState, useContext } from "react";
import { SongContext } from "../context/SongContext";
import { ThemeContext } from "../context/ThemeContext";

const SongList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { songs } = useContext(SongContext);
    // const [songs, setSongs] = useState([
    //     { title: "Shook ones", id: 0 },
    //     { title: "Juicy", id: 1 },
    //     { title: "Hipnotize", id: 2 },
    // ]);


    return (
        <>
            <h2>My song list</h2>
            <ul style={{ background: theme.bg }}>
                {songs.map((song, index) => {
                    return <li style={{ background: theme.ui, color: theme.syntax }} key={index}>{song.title}</li>;
                })}
            </ul>

        </>
    );
};
export default SongList;