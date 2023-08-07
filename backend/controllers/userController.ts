const code = undefined;
const clientID = process.env.CLIENT_ID
import {getAccessToken} from "./authController"

const fetchProfile = async (req, res): Promise<UserInterface> => {
	const token = req.params.token; 
	console.log(token);
	try {
		const result = await fetch("https://api.spotify.com/v1/me", {
			method: "GET", headers: { Authorization: `Bearer ${token}` }
		})
		res.status(200).json(result);
	} catch(error) {
		res.status(404).json({message: 'User not found'});
	}
}

module.exports = {
	fetchProfile
}
