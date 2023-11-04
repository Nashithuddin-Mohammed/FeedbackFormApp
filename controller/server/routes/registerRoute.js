const express = require('express')
const router = express.Router()
const User = require('../../../models/user')

router.get("/", function (req, res) {
    res.render("register");
});

router.post("/", async (req, res) => {
    const user = await User.create({
        username: req.body.username,
        password: req.body.password
    });
    res.render("login");
    // return res.status(200).json(user);
});
module.exports = router;