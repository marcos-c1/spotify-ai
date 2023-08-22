const Artist = require('../model/Artist');
const { writeFile } = require('node:fs');

const saveArtist = async (req, res) => {
    const { external_urls, followers, genres, href, id, images, name, popularity, type, uri } = req.body;

    try {
        const artist = await Artist.create({ external_urls: external_urls, followers: followers, genres: genres, href: href, id: id, images: images, name: name, popularity: popularity, type: type, uri: uri });
        console.log(artist);
        res.status(200).json(artist);
    } catch (error) {
        res.status(500).json({ 'message': `Server error ${error.message}` });
    }
}

const saveToFile = async (req, res) => {
    const artists = req.body;
    console.log(artists);
    const date = new Date();
    writeFile(`./output/artists_${date}.json`, JSON.stringify(artists), (err: Error) => {
        if (err) {
            console.error(err);
            res.status(500).json({ 'message': 'Cannot save to file.' })
        }
        else {
            console.log("File written successfully!");
            res.status(200).json({ 'message': 'Saved!' })
        }
    })
}

module.exports = {
    saveArtist,
    saveToFile
}
