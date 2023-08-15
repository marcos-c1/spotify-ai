"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const artistRoute_1 = __importDefault(require("./routes/artistRoute"));
var cors = require('cors');
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// CORS
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
// Routes
app.use('/', artistRoute_1.default);
app.listen(port, () => {
    console.log(`[SERVER]: Server is running at http://localhost:${port}`);
});
