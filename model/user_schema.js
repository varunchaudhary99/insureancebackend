const mongoose = require('mongoose')



let RegSchema = new mongoose.Schema({
        phone: { type: String,
       unique: true, required: true },
      createdAt: { type: Date, default: Date.now },
      });

module.exports = mongoose.model('User',RegSchema)