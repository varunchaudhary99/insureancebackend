const express = require('express');
const router = express.Router();
const { sendOTP, verifyOTP } = require('../controller/authcontroller');
const { getInsuranceItems } = require('../controller/authcontroller'); 
const { profileInfo } = require('../controller/authcontroller'); 
const { carNumber} = require('../controller/vehical_controller')
const { getCarBrands } =require('../controller/vehical_controller')




router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP);
router.get('/home', getInsuranceItems);
router.post('/profile', profileInfo);
router.post('/carNumber', carNumber);
router.get('/carBrand', getCarBrands);



module.exports = router;