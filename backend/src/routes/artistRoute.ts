const express = require('express');
const router = express.Router();

import { saveArtists } from '../controllers/artistController';

router.post('/artist', saveArtists);

module.exports = router;