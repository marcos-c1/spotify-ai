"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const userRoute_1 = __importDefault(require("./routes/userRoute"));
var cors = require('cors');
const app = express();
const port = process.env.PORT;
// Middleware for cookies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// CORS
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use('/', userRoute_1.default);
app.listen(port, () => {
    console.log(`[SERVER]: Server is running at http://localhost:${port}`);
});
