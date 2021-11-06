import Express from "express";
import dotenv from 'dotenv';

const app = Express();
const port = 3000;

dotenv.config();

// Import Routes
import authRoute from './routes/auth.js';

// Route Middlewares
app.use('/api/user', authRoute);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/healthcheck", (req, res) => {
    // also check db connection
    // something of the sorts: db.execute('SELECT 1')
    res.sendStatus(200);
});

app.listen(port, () => console.log("listening on port " + port));
