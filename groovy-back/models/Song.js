const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    genre: { type: String },
    description: { type: String },
    image: { type: String },
    file: { type: String },
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;