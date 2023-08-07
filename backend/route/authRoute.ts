const express = require("express")
const router = express.Router();
import { getAccessToken } from "../controllers/authController"

router.post("/token", getAccessToken);

export default router;
