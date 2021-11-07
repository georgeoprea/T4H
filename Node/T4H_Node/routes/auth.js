import Express from 'express';
var router = Express.Router();

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
        res.json({
            "message":"great"
        })
    } else {
        res.sendStatus(400);
    }
});

router.post('/login', (req, res) => {
    res.send("Login")
});

export default router;
