"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const authController_1 = require("../controllers/authController");
router.post("/token", authController_1.getAccessToken);
exports.default = router;
