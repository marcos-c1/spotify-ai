import axios from "axios";

async function fetchProfile(token) {
	const result = await fetch("https://api.spotify.com/v1/me", {
		method: "GET", headers: { Authorization: `Bearer ${token}` }
	});

	return await result.json();
}

export default {
	fetchProfile
}