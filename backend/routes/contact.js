const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const {fname, lname, subject, email, message} =  req.body;
    console.log('cotent from summited', {fname, lname, subject, email, message});
    res.status(200).json({status : 'Message Received'});
});

module.exports = router;