const mongoose = require('mongoose')
require('dotenv').config()
const InsuranceItem = require('../model/InsuranceItem');
const homeItemJson = require("../config/InsuranceItem.json")
const profileInfo = require("../model/profile_schema")
const profileJson = require("../config/profile.json")
const CarBrand = require("../model/car_number_schema")
const carBrandJson = require("../config/carbrand.json")
let connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
         console.log("Database Succcessfully connected")
         await InsuranceItem.create(homeItemJson)
         await profileInfo.create(profileJson)
         await CarBrand.create(carBrandJson)
         await InsuranceItem.deleteMany({});
    } catch(error){
        console.log(error)
    }
}

module.exports = connectDB