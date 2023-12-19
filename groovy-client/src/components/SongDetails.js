import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SongDetails({ match }) {
    const [song, setSong] = useState(null);

    useEffect(() => {
        const songId = match.params.id; // assuming you're passing the song ID in the URL
        axios.get(`http://localhost:3001/api/songs/${songId}`)
            .then((response) => setSong(response.data))
            .catch((error) => console.error('Error fetching song:', error));
    }, [match.params.id]);

    return (
        <div>
            <div>Vous etes sur la page du morceau </div>

            {song ? (
                <div>
                    <h2>{song.title}</h2>
                    <p>Description: {song.description}</p>
                    <p>Artist: {song.artist}</p>
                    <p>Genre: {song.genre}</p>
                    <img src={song.image} alt={song.title} />
                    {/* Embed an audio player */}
                    <audio controls>
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