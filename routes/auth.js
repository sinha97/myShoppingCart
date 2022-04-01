const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { signout,signup,signin } = require('../controllers/auth');


router.post("/signup", [
    check("name", "name should be atleast 3 char").isLength({ min: 3 }),
    check("email","email is requied").isEmail(),
    check("password","password should be atleast 4 char").isLength({ min: 4}),
], signup);


router.post("/signin", [
    check("email","email is requied").isEmail(),
    check("password","password field is required").isLength({ min: 4}),
], signin);

router.get('/signout', signout);


module.exports = router;