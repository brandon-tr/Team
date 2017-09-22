var mongoose = require('mongoose')

var TeamSchema = new mongoose.Schema({
    name:{type:String, required:true},
    position:{type:String},
    Game1: {type:Number, default:0}
},{timestamps:true})

var TeamSchema = mongoose.model('Team', TeamSchema)