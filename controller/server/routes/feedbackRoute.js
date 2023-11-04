const express = require('express')
const router = express.Router()
const Feedback = require('../../../models/feedback')
const profanity = require('@2toad/profanity').profanity;

router.get('/', (req, res) => {
    res.render('feedbackform', {
        loggedIn: true
    })
})

router.post('/setFeedback', async (req, res) => {
    const cleanFeedback = profanity.censor(req.body.feedback)
    var feedback = new Feedback()
    feedback.smuid = req.body.smuid
    feedback.profName = req.body.profName
    feedback.courseTitle = req.body.courseTitle
    feedback.courseCode = req.body.courseCode
    feedback.feedback = cleanFeedback
    const feedbackEntry = new Feedback(feedback)
    await feedbackEntry.save()
    console.log('Saved')
    res.redirect('/')
})
// function isLoggedIn(req, res, next) {
//     if (req.session.user) return next();
//     res.redirect("/login");
// }
module.exports = router;