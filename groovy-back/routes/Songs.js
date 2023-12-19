const express = require('express');
const router = express.Router();
const SongController = require('../controllers/SongController');

router.get('/', SongController.getAllSongs);
router.get('/:id', SongController.getSongById);
router.post('/', SongController.createSong);
router.put('/:id', SongController.updateSong);
router.delete('/:id', SongController.deleteSong);

module.exports = router;