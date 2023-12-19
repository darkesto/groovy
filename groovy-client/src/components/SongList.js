import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SongList() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/songs')
            .then((response) => setSongs(response.data))
            .catch((error) => console.error('Error fetching songs:', error));
    }, []);

    return (
        <div>
            <h2>Song List</h2>
            <ul>
                {songs.map((song) => (
                    <li key={song.id}>
                        <Link to={`/song/${song.id}`}>{song.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SongList;