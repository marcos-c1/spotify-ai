const express = require("express");
const app: Express = express();
const port = process.env.PORT;
import userRouter from './routes/userRoute';
import authRouter from './routes/authRoute';
import dotenv from 'dotenv';
dotenv.config();

app.use('/', userRoute);
app.use('/', authRoute);

app.listen(port, () => { 
    console.log(`[SERVER]: Server is running at http://localhost:${port}`);
})
