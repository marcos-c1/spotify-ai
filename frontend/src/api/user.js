import axios from "axios";

const BASE_USER_SPOTIFY_URL = "https://api.spotify.com/v1/me"
const BASE_SPOTIFY_URL = "https://api.spotify.com/v1";

async function fetchProfile(token) {
	return await axios.get(BASE_USER_SPOTIFY_URL, {
		headers: { 'Authorization': `Bearer ${token}` }
	});
}

async function getPlaylists(token) {
	return await axios.get(`${BASE_USER_SPOTIFY_URL}/playlists?limit=50`, {
		headers: { Authorization: `Bearer ${token}` }
	});
}

async function getAlbums(token) {
	return await axios.get(`${BASE_USER_SPOTIFY_URL}/albums?limit=50`, {
		headers: { Authorization: `Bearer ${token}` }
	});
}

async function getTracks(token, nextURL = undefined) {
	let result;
	if (nextURL) {
		result = await axios.get(nextURL, {
			headers: { Authorization: `Bearer ${token}` }
		});

	} else {
		result = await axios.get(`${BASE_USER_SPOTIFY_URL}/tracks?limit=50`, {
			headers: { Authorization: `Bearer ${token}` }
		});
	}

	return result
}

async function getArtists(token, artistsID) {
	return await axios.get(`${BASE_SPOTIFY_URL}/artists?ids=${artistsID}`, {
		headers: { Authorization: `Bearer ${token}` }
	});
}

async function saveArtist(external_urls, followers, genres, href, id, images, name, popularity, type, uri) {
	return await axios.post(`http://localhost:5000/artist`, {
		body: {
			external_urls, followers, genres, href, id, images, name, popularity, type, uri
		}
	})
}

async function saveArtistToFile(artists) {
	return await axios.post(`http://localhost:5000/file`, { artists }, {
		headers: {
			'content-type': 'text/json'
		}
	})
}

export default {
	fetchProfile,
	getPlaylists,
	getAlbums,
	getTracks,
	getArtists,
	saveArtist,
	saveArtistToFile
}