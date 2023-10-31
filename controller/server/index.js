const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.set('views', path.join(__dirname, '..', '..', 'views'))
app.use(express.static(path.join(__dirname, '..', '..', 'public')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'views', 'feedback.html'))
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'views', 'login.html'))
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'views', 'register.html'))
})
app.get('/feedback', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'views', 'feedbackform.html'))
})
app.listen(port, () => {
    console.log('Server running at http://localhost:${port}')
})