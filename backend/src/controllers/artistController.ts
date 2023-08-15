const Artist = require('../model/Artist');

const saveArtist = async (req, res, next) => {
    const { external_urls, followers, genres, href, id, images, name, popularity, type, uri } = req.body;

    try {
        const artist = await Artist.create({ external_urls: external_urls, followers: followers, genres: genres, href: href, id: id, images: images, name: name, popularity: popularity, type: type, uri: uri });
        res.status(200).json(artist);
    } catch (error) {
        res.status(500).json({ 'message': `Server error ${error.message}` });
    }
}

module.exports = {
    saveArtist
}