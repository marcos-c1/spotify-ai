const code = undefined;
const clientID = process.env.CLIENT_ID
import {getAccessToken} from "./authController"

async function fetchProfile(req, res): Promise<UserInterface> => {
	const token = await getAccessToken(clientID, code);
	try {
		const result = await fetch("https://api.spotify.com/v1/me", {
			method: "GET", headers: { Authorization: `Bearer ${token}` }
		})
		res.status(200).json(result);
	} catch(error) {
		res.status(404).json({message: 'User not found'});
	}
}




















