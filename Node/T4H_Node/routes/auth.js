import Express from 'express';
var router = Express.Router();

router.post('/register', (req, res) => {
    res.send("Register");
});

router.post('/login', (req, res) => {
    res.send("Login")
});

export default router;
