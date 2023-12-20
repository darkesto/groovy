const Song = require('../models/Song');

// let songs = [
//     new Song(
//         1,
//         'Song 1',
//         'Artist 1',
//         'Genre 1',
//         'Description for Song 1',
//         'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg',
//         'song1.mp3'
//     ),
//     new Song(
//         2,
//         'Song 2',
//         'Artist 2',
//         'Genre 2',
//         'Description for Song 2',
//         'https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg',
//         'song2.mp3'
//     ),

//     new Song(
//         3,
//         'Song 3',
//         'Artist 3',
//         'Genre 3',
//         'Description for Song 3',
//         'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
//         'song3.mp3'
//     ),
//     new Song(
//         4,
//         'Song 4',
//         'Artist 4',
//         'Genre 4',
//         'Description for Song 4',
//         'https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg',
//         'song4.mp3'
//     ),
//     new Song(
//         5,
//         'Song 5',
//         'Artist 5',
//         'Genre 5',
//         'Description for Song 5',
//         'https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg',
//         'song5.mp3'
//     )
// ];

// const getAllSongs = (req, res) => {
//     res.json(songs);
// };

// const getSongById = (req, res) => {
//     const { id } = req.params;
//     const song = songs.find((song) => song.id === parseInt(id, 10));
//     if (song) {
//         res.json(song);
//     } else {
//         res.status(404).json({ message: 'Song not found' });
//     }
// };

// const createSong = (req, res) => {
//     const { title, artist, genre, description, image, file } = req.body;
//     const id = songs.length + 1; // This is just a basic example, in reality, use unique identifiers
//     const newSong = new Song(id, title, artist, genre, description, image, file);
//     songs.push(newSong);
//     res.status(201).json(newSong);
// };

const Song = require('../models/Song');


// Get all songs from MongoDB
const getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    } catch (error) {
        console.error('Error fetching songs:', error);
        res.status(500).json({ message: 'Error fetching songs', error: error.message });
    }
};

// Get a song by ID from MongoDB
const getSongById = async (req, res) => {
    const { id } = req.params;
    try {
        const song = await Song.findById(id);
        if (song) {
            res.json(song);
        } else {
            res.status(404).json({ message: 'Song not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching song', error: error.message });
    }
};

const createSong = async (req, res) => {
    try {
        const { title, artist, genre, description, image, file } = req.body;
        const newSong = await Song.create({
            title,
            artist,
            genre,
            description,
            image,
            file
        });
        res.status(201).json(newSong);
    } catch (error) {
        res.status(500).json({ message: 'Error creating song', error: error.message });
    }
};






const updateSong = (req, res) => {
    const { id } = req.params;
    const { title, artist, genre, description, image, file } = req.body;
    const songIndex = songs.findIndex((song) => song.id === parseInt(id, 10));
    if (songIndex !== -1) {
        songs[songIndex] = { ...songs[songIndex], title, artist, genre, description, image, file };
        res.json(songs[songIndex]);
    } else {
        res.status(404).json({ message: 'Song not found' });
    }
};

const deleteSong = (req, res) => {
    const { id } = req.params;
    songs = songs.filter((song) => song.id !== parseInt(id, 10));
    res.status(204).end();
};

module.exports = {
    getAllSongs,
    getSongById,
    createSong,
    updateSong,
    deleteSong,
};