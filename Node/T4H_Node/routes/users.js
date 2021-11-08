import Express from "express";
const Router = Express.Router();
import db from '../config/database.js'
import User from '../model/User.js'
import router from "./auth.js";

router.get('/getUsers', (req, res) => {
    User.findAll()
    .then( users => {
        res.send(users);
    }).catch( err => {
        console.log("Error when retrieving all users.");
        console.log(err);
        res.sendStatus(400);
    });
});

router.delete("/deleteUser", (req, res) => {
    const username = req.body.username;
    User.destroy(
        {
            where:{
                username: username,
                role: "external"
            }
        }).then(
            () => { 
                res.sendStatus(200);
            }).catch(
                ()=>res.sendStatus(404));
});

export default router;