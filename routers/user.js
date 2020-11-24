const express = require('express');
const router = new express.Router()
const User = require('../models/user')
const {sendEmail} = require('../emails/userAccount')
const cors = require('cors');

router.use(cors());

router.get('/', (req,res) => {
    res.send('Hello World')
})







router.post('/users', async  (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        sendEmail(user.email, user.firstName)
        res.json({ result: "success", message: "Register successfully" }) 
    } catch (e) {
       res.status(400).send(e)
    }
 })
 
 




module.exports = router