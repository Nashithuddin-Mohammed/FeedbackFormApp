const express = require('express')
const router = express.Router()
const Feedback = require('../../../models/feedback')

router.get('/', (req, res) => {
    res.render('feedbackform')
})

router.post('/setFeedback', async (req, res) => {
    console.log(req.body)
    const feedbackEntry = new Feedback(req.body)
    await feedbackEntry.save()
    console.log('Saved')
    res.redirect('/')
})
module.exports = router;