"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const userController_1 = require("../controllers/userController");
router.get("/user", userController_1.fetchProfile);
exports.default = router;
