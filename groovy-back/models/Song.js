
class Song {
    constructor(id, title, artist, genre, description, image, file) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.genre = genre;
        this.description = description;
        this.image = image;
        this.file = file;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getArtist() {
        return this.artist;
    }

    setArtist(artist) {
        this.artist = artist;
    }

    getGenre() {
        return this.genre;
    }

    setGenre(genre) {
        this.genre = genre;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getImage() {
        return this.image;
    }

    setImage(image) {
        this.image = image;
    }

    getFile() {
        return this.file;
    }

    setFile(file) {
        this.file = file;
    }
}

module.exports = Song;



