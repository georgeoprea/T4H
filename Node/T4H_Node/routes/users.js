import Express from "express";
const Router = Express.Router();
import db from '../config/database.js'
import User from '../model/User.js'
import router from "./auth.js";

router.get('/getUsers', (req, res) => {
    User.findAll()
    .then( user => {
        console.log("User: " + user.name);
        res.sendStatus(200);
    }).catch( err => {
        console.log("Error when retrieving all users.");
        console.log(err);
        res.sendStatus(400);
    });
});

export default router;