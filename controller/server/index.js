const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const mongoose = require('mongoose')
const feedbackRoute = require('./routes/feedbackRoute')
const homeRoute = require('./routes/homeRoute')
const loginRoute = require('./routes/loginRoute')
const registerRoute = require('./routes/registerRoute')
const bodyParser = require('body-parser')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const passportLocalMongoose = require('passport-local-mongoose')
const User = require('../../models/user')
mongoose.connect('mongodb://127.0.0.1:27017/feedbackdb').then(() => { console.log('Connection Established') }).catch(err => { console.log('Connection Failed'); console.log(err) });

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '..', '..', 'views'))
app.use(express.static(path.join(__dirname, '..', '..', 'public')))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}))
app.use('/', homeRoute)
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/feedback', feedbackRoute)
app.use('/login', loginRoute)
app.use('/register', registerRoute)
app.get("/logout", function (req, res) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});
app.listen(port, () => {
    console.log('Server running at http://localhost:${port}')
})