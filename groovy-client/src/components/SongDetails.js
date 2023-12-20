import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SongDetails.css';


function SongDetails({ match }) {
    const [song, setSong] = useState(null);
    console.log(song);
    useEffect(() => {
        const songId = match.params.id;
        // Fetch song details from your API endpoint
        axios.get(`http://localhost:3001/api/songs/${songId}`)
            .then((response) => setSong(response.data))
            .catch((error) => console.error('Error fetching song:', error));
    }, [match.params.id]);

    return (
        <div className="song-details-container">
            {song ? (
                <div>
                    <h2 className="song-title">{song.title}</h2>
                    <div className="song-info">
                        <p>Artist: {song.artist}</p>
                        <p>Genre: {song.genre}</p>
                    </div>
                    <img src={song.image} alt={song.title} className="song-image" />
                    <p className="song-description">{song.description}</p>
                    {/* Embed an audio player */}
                    <audio controls className="audio-player">
                        <source src={`http://localhost:3001/api/songs/${song.file}`} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default SongDetails;