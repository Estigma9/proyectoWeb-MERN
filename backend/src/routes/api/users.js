const router = require('express').Router();
const bcrypt = require('bcryptjs');

const {User} = require('../../models');
const userController = require('../../controllers/UserController.js');


//api/user 
router.get('/', async(req, res)=>{
    const user = await User.find({});
    res.status(200).json(user);
});

//api/user/register
router.post('/register', async(req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.status(200).json(user);
});

//api/user/login
router.post('/login', userController.login);


module.exports = router;