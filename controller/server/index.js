const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const mongoose = require('mongoose')
const feedbackRoute = require('./routes/feedbackRoute')
const bodyParser = require('body-parser')
mongoose.connect('mongodb://127.0.0.1:27017/feedbackdb').then(() => { console.log('Connection Established') }).catch(err => { console.log('Connection Failed'); console.log(err) });

app.set('views', path.join(__dirname, '..', '..', 'views'))
app.use(express.static(path.join(__dirname, '..', '..', 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'views', 'feedback.html'))
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'views', 'login.html'))
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'views', 'register.html'))
})
app.use('/feedback', feedbackRoute)

app.listen(port, () => {
    console.log('Server running at http://localhost:${port}')
})