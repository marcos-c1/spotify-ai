const express = require('express');
const router = express.Router();

import { saveArtist, saveToFile } from '../controllers/artistController'

router.post('/artist', saveArtist);
router.post('/file', saveToFile);

module.exports = router;