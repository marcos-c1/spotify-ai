"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
const artistSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    external_urls: {
        spotify: {
            type: String
        }
    },
    followers: {
        type: Number,
        required: true
    },
    genres: {
        type: [String],
        required: true
    },
    href: {
        type: String,
        required: true
    },
    images: [mongoose_1.SchemaTypes.Mixed],
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    },
    uri: {
        type: String
    }
});
module.exports = mongoose.model('Artist', artistSchema);
