const express = require('express')
const router = express.Router()
const Feedback = require('../../../models/feedback')

router.get('/', async (req, res) => {
    var loggedIn = false
    if (req.session.user) {
        loggedIn = true
    }
    else {
        loggedIn = false
    }
    const feedbackDataRaw = await Feedback.find({})
    if (!feedbackDataRaw) {
        res.render('feedback',
            { data: { feedbackData: [], loggedIn: loggedIn } })
    }
    // const feedbackData = JSON.stringify(feedbackDataRaw)
    res.render('feedback',
        { data: { feedbackData: feedbackDataRaw, loggedIn: loggedIn } })
})

module.exports = router;