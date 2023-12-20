import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './SongDetails.css';


const videoId = 'dQw4w9WgXcQ';

function SongDetails({ match }) {
    const [song, setSong] = useState(null);
    let { id: songId } = useParams();
    const [editedSong, setEditedSong] = useState({}); // State to hold edited song details

    console.log(song);
    useEffect(() => {

        // Fetch song details from your API endpoint
        axios.get(`http://localhost:3001/api/songs/${songId}`)
            .then((response) => {
                setSong(response.data);
                setEditedSong(response.data);
            })
            .catch((error) => console.error('Error fetching song:', error));
    }, [songId]);


    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedSong({ ...editedSong, [name]: value });
    };


    // Handle form submission to update the song
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/api/songs/${songId}`, editedSong)
            .then((response) => {
                alert("bravo t'es un bg")
                console.log('Song updated successfully:', response.data);
                // Optionally update the local state or perform any action after updating the song
            })
            .catch((error) => console.error('Error updating song:', error));
    };






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


                    {/* Form to edit song details */}
                    <form onSubmit={handleSubmit}>
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={editedSong.title || ''}
                            onChange={handleInputChange}
                        />
                        <label>Artist:</label>
                        <input
                            type="text"
                            name="artist"
                            value={editedSong.artist || ''}
                            onChange={handleInputChange}
                        />
                        {/* Add more input fields for other song details */}
                        <button type="submit">Update Song</button>
                    </form>

                    <div className="video-container">
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>




            ) : (
                <p>Loading...</p>
            )
            }
        </div >
    );
}

export default SongDetails;