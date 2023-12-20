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
// Get a song in MongoDB
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



const updateSong = async (req, res) => {

    const { id } = req.params;
    const { title, artist, genre, description, image, file } = req.body;

    try {
        const song = await Song.findByIdAndUpdate(
            id,
            { title, artist, genre, description, image, file },
            { new: true }
        );
        // const song = await Song.findById(id);
        if (song) {
            res.json(song);
        } else {
            res.status(404).json({ message: 'Song not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating song', error: error.message });
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