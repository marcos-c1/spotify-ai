const express = require("express")
const router = express.Router();
import { fetchProfile } from "../controllers/userController"

router.get("/user/:token", fetchProfile);

export default router;
