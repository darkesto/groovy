import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SongList.css';

function SongList() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        // Fetch songs from your API endpoint
        axios.get('http://localhost:3001/api/songs')
            .then((response) => setSongs(response.data))
            .catch((error) => console.error('Error fetching songs:', error));
    }, []);

    return (
        <div className="song-list-container">
            <h1 className="page-title">Your Song Library</h1>
            <div className="song-list">

                {songs.map((song) => (

                    <Link to={`/songs/${song.id}`} key={song.id} className="song-card">
                        <img src={song.image} alt={song.title} className="song-image" />
                        <div className="song-details">
                            <h3 className="song-title">{song.title}</h3>
                            <p className="song-artist">{song.artist}</p>
                        </div>
                    </Link>

                ))}

            </div>
        </div>
    );
}

export default SongList;