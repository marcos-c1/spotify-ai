"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const code = undefined;
const clientID = process.env.CLIENT_ID;
const authController_1 = require("./authController");
{
    const token = await (0, authController_1.getAccessToken)(clientID, code);
    try {
        const result = await fetch("https://api.spotify.com/v1/me", {
            method: "GET", headers: { Authorization: `Bearer ${token}` }
        });
        res.status(200).json(result);
    }
    catch (error) {
        res.status(404).json({ message: 'User not found' });
    }
}
