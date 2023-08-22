import express, { Express } from 'express';
import dotenv from 'dotenv';
import connect from './config/db';
import artistRoute from './routes/artistRoute';

var cors = require('cors');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: false, limit: '20mb' }));
app.use(express.json({ limit: '20mb' }));

// CORS
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', function (req, res) {
    //path.join(__dirname, '/index.html'
    res.send('its working!');
})

// Routes
app.use('/', artistRoute);


app.listen(port, () => {
    console.log(`[SERVER]: Server is running at http://localhost:${port}`);
});