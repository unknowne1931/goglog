const mongoose = require('mongoose');

const WonValSchema = new mongoose.Schema({
    email : String,
    rank : String,
    Time : String,
    
});

module.exports = mongoose.model('WonVal', WonValSchema)