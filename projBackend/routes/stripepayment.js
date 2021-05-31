const express = require('express');
const { makepayment } = require('../controllers/stripePayment');
const router = express.Router();

router.post('/stripepayment',makepayment)

module.exports = router;