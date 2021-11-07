import Express from 'express';
import dotenv from 'dotenv';
import db from './config/database.js';
import users from './routes/users.js';

// Import Routes
import authRoute from './routes/auth.js';

dotenv.config();

// Test db connection
db.authenticate()
    .then(()=>console.log("Connected to db"))
    .catch( err => console.log('Error: ' + err));

const app = Express();
const port = 3000;


//Middleware
app.use(Express.json());
// Route Middlewares
app.use('/api/auth', authRoute);
app.use('/api/users', users);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/healthcheck", (req, res) => {
    // also check db connection
    // something of the sorts: db.execute('SELECT 1')
    res.sendStatus(200);
});

app.listen(port, () => console.log("listening on port " + port));
