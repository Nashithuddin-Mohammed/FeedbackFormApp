const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.set('views', path.join(__dirname, '..', '..', 'views'))
app.get('/', (req, res) =>
{
    res.sendFile(path.join(__dirname, '..', '..', 'views', 'feedback.html'))
})

app.listen(port, () => 
{
    console.log('Server running at http://localhost:${port}')
})