const express = require('express')
const router = express.Router()
const User = require('../../../models/user')

router.get("/", function (req, res) {
    res.render("login");
});

router.post("/", async function (req, res) {
    try {
        // check if the user exists 
        const user = await User.findOne({ username: req.body.username });
        if (user) {
            //check if password matches 
            const result = req.body.password === user.password;
            if (result) {
                res.render("feedbackform", { loggedIn: true });
            } else {
                res.status(400).json({ error: "password doesn't match" });
            }
        } else {
            res.status(400).json({ error: "User doesn't exist" });
        }
    } catch (error) {
        res.status(400).json({ error });
    }
});
module.exports = router;