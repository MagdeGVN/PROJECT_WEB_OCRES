//const { Mongoose } = require("mongoose");

const film = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    movie: String,
    yearOfRelease: Number,
    duration: Number,
    actors: [String, String],
    poster: String,
    boxOffice: Number,
    rottenTomatoesScore: Number,
});