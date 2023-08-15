import express, { Express } from 'express';
import dotenv from 'dotenv';
import connect from './config/db';
import artistRoute from './routes/artistRoute';

var cors = require('cors');

dotenv.config();
connect();

const app: Express = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));


// Routes
app.use('/', artistRoute);


app.listen(port, () => {
    console.log(`[SERVER]: Server is running at http://localhost:${port}`);
});