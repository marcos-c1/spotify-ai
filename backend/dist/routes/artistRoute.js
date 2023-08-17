"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const artistController_1 = require("../controllers/artistController");
router.post('/artist', artistController_1.saveArtist);
router.post('/file', artistController_1.saveToFile);
module.exports = router;
