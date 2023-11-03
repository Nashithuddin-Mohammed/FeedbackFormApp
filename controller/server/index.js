const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const mongoose = require('mongoose')
const feedbackRoute = require('./routes/feedbackRoute')
const homeRoute = require('./routes/homeRoute')
const bodyParser = require('body-parser')
mongoose.connect('mongodb://127.0.0.1:27017/feedbackdb').then(() => { console.log('Connection Established') }).catch(err => { console.log('Connection Failed'); console.log(err) });

app.set('view engine', 'ejs')
console.log(path.join(__dirname, '..', '..', 'views'))
app.set('views', path.join(__dirname, '..', '..', 'views'))
app.use(express.static(path.join(__dirname, '..', '..', 'public')))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use('/', homeRoute)
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/register', (req, res) => {
    res.render('register')
})
app.use('/feedback', feedbackRoute)

app.listen(port, () => {
    console.log('Server running at http://localhost:${port}')
})