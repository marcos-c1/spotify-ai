const express = require("express");
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/userRoute';
import authRouter from './routes/authRoute';
var cors = require('cors');
const app: Express = express();
const port = process.env.PORT;

// Middleware for cookies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use('/', userRouter);

app.listen(port, () => { 
    console.log(`[SERVER]: Server is running at http://localhost:${port}`);
})
