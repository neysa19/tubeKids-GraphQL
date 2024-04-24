const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    idPlaylist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Playlist', 
        required: true
    }
 
});

module.exports = mongoose.model('Video', videoSchema);
