const express = require('express');
const router = express.Router();

//const subject = '{"contactSubject": ["General Enquery","Classes","Schedules","Instructor","Prices","Other","Yayyyyy", "Yoooyyyyyy"]}'
const subject = require('../data/contact_subject.json');

router.get('/', (req, res) => {
  res.json(subject);
});

module.exports = router;