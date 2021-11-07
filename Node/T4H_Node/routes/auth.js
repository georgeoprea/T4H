import Express from 'express';
var router = Express.Router();
import User from '../model/User.js'

function isUserValid(user){
    const validEmail = typeof user.email == 'string' &&
    user.email.trim() != '';
    const validPassword = typeof user.password == 'string' &&
    user.password.trim() != '' &&
    user.password.trim().length >= 6;
    return validEmail && validPassword;
}

router.post('/register', (req, res) => {
    // res.send("Register");
    console.log("req body " + req.body)
    if (isUserValid(req.body)){
        console.log(req.body)
        // res.sendStatus(200)
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            role: "internal"
        })
        .then(
            user => res.send(user)
        ).catch( err => {
            console.log("Error when registering new user");
            console.log(err);
            res.sendStatus(400);
        });
    } else {
        res.sendStatus(400);
    }
});

router.post('/login', (req, res) => {
    res.send("Login")
});

export default router;
