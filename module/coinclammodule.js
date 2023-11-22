const mongoose = require('mongoose');

const CoinclaimSchema = new mongoose.Schema({
    email : String,
    Time : String,
    stars :String,
    name : String,
    valueID : String,
    valid : String,
    img : String,
    time : String
    
});

module.exports = mongoose.model('Clamd_Coins', CoinclaimSchema)