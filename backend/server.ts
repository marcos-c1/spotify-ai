import express, { Express } from 'express';
import dotenv from 'dotenv';
import connect from './config/db';
import artistRoute from './routes/artistRoute';

var cors = require('cors');

dotenv.config();
connect();

const app: Express = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

app.get('/', function (req, res) {
    //path.join(__dirname, '/index.html'
    res.send('its working!');
})

// CORS
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Routes
app.use('/', artistRoute);


app.listen(port, () => {
    console.log(`[SERVER]: Server is running at http://localhost:${port}`);
});