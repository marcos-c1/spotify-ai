"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Artist = require('../model/Artist');
const { writeFile } = require('node:fs');
const saveArtist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { external_urls, followers, genres, href, id, images, name, popularity, type, uri } = req.body;
    try {
        const artist = yield Artist.create({ external_urls: external_urls, followers: followers, genres: genres, href: href, id: id, images: images, name: name, popularity: popularity, type: type, uri: uri });
        console.log(artist);
        res.status(200).json(artist);
    }
    catch (error) {
        res.status(500).json({ 'message': `Server error ${error.message}` });
    }
});
const saveToFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const artists = req.body;
    console.log(artists);
    const date = new Date();
    writeFile(`./output/artists_${date}.json`, JSON.stringify(artists), (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ 'message': 'Cannot save to file.' });
        }
        else {
            console.log("File written successfully!");
            res.status(200).json({ 'message': 'Saved!' });
        }
    });
});
module.exports = {
    saveArtist,
    saveToFile
};
