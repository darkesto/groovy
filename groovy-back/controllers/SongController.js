const Song = require('../models/Song');


let songs = [
    new Song(
        1,
        'Song 1',
        'Artist 1',
        'Genre 1',
        'Description for Song 1',
        'https://example.com/image1.jpg',
        'song1.mp3'
    ),
    new Song(
        2,
        'Song 2',
        'Artist 2',
        'Genre 2',
        'Description for Song 2',
        'https://example.com/image2.jpg',
        'song2.mp3'
    ),

    new Song(
        3,
        'Song 3',
        'Artist 3',
        'Genre 3',
        'Description for Song 3',
        'https://example.com/image3jpg',
        'song3.mp3'
    ),
    new Song(
        4,
        'Song 4',
        'Artist 4',
        'Genre 4',
        'Description for Song 4',
        'https://example.com/image4.jpg',
        'song54.mp3'
    ),
    new Song(
        5,
        'Song 5',
        'Artist 5',
        'Genre 5',
        'Description for Song 5',
        'https://example.com/image5.jpg',
        'song5.mp3'
    )
];









const getAllSongs = (req, res) => {
    res.json(songs);
};

const getSongById = (req, res) => {
    const { id } = req.params;
    const song = songs.find((song) => song.id === parseInt(id, 10));
    if (song) {
        res.json(song);
    } else {
        res.status(404).json({ message: 'Song not found' });
    }
};

const createSong = (req, res) => {
    const { title, artist, genre, description, image, file } = req.body;
    const id = songs.length + 1; // This is just a basic example, in reality, use unique identifiers
    const newSong = new Song(id, title, artist, genre, description, image, file);
    songs.push(newSong);
    res.status(201).json(newSong);
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