const express = require('express')
const router = express.Router()
const Feedback = require('../../../models/feedback')
const path = require('path')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..', 'views', 'feedbackform.html'))
})

router.get('/getFeedback', async (req, res) => {
    const feedbackData = await Feedback.find({})
    res.sendFile(path.join(__dirname, '..', '..', '..', 'views', 'feedback.html'),
        { data: feedbackData })
})

router.post('/setFeedback', async (req, res) => {
    console.log(req.body)
    const feedbackEntry = new Feedback(req.body)
    await feedbackEntry.save()
    console.log('Saved')
    res.redirect('/')
})
module.exports = router;