const express = require('express')
const router = express.Router()
const Feedback = require('../../../models/feedback')

router.get('/', async (req, res) => {
    const feedbackDataRaw = await Feedback.find({})
    if (!feedbackDataRaw) {
        res.render('feedback',
            { data: [] })
    }
    // const feedbackData = JSON.stringify(feedbackDataRaw)
    res.render('feedback',
        { data: feedbackDataRaw })
})
module.exports = router;