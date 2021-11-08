import Express from 'express';
import dotenv from 'dotenv';
import db from './config/database.js';
import users from './routes/users.js';
import session from 'express-session';

// Import Routes
import authRoute from './routes/auth.js';
import jwt from 'jsonwebtoken';

dotenv.config();

// Test db connection
const app = Express();
const port = 5000;

let retries = 5;
while (retries){

    try {
        await createConnection();
        break;
    } catch (err){
        console.log(err);
        retries -= 1;
        console.log("retries left for db connection" + retries)
        // wati 5 seconds between db connection retries
        await new Promise(res => setTimeout(res, 5000));
    }
}


function createConnection(){
    db.authenticate()
    .then(()=>console.log("Connected to db"))
    .catch( err => console.log('Error: ' + err));
}

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
    db.query('SELECT 1').then(r => {
        // console.log(r);
        res.send(200);
    }).catch(err => {
        console.log(err);
        res.send(500);
    });
    // res.sendStatus(200);
});

app.listen(port, () => console.log("listening on port " + port));
