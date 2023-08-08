const BASE_USER_SPOTIFY_URL = "https://api.spotify.com/v1/me"

async function fetchProfile(token) {
	const result = await fetch(BASE_USER_SPOTIFY_URL, {
		method: "GET", headers: { Authorization: `Bearer ${token}` }
	});

	return await result.json();
}

async function getPlaylists(token) {
	const result = await fetch(`${BASE_USER_SPOTIFY_URL}/playlists`, {
		method: "GET", headers: { Authorization: `Bearer ${token}` }
	});

	return await result.json();
}

async function getAlbums(token) {
	const result = await fetch(`${BASE_USER_SPOTIFY_URL}/albums?limit=50`, {
		method: "GET", headers: { Authorization: `Bearer ${token}` }
	});

	return await result.json();
}

export default {
	fetchProfile,
	getPlaylists,
	getAlbums
}