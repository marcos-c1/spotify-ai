"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = process.env.PORT;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
app.use('/', userRoute);
app.use('/', authRoute);
app.listen(port, () => {
    console.log(`[SERVER]: Server is running at http://localhost:${port}`);
});
