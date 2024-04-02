const mongoose = require('mongoose')

const Schema = mongoose.Schema

const startup = new Schema({
    sname : String,
    domain : String,
    oneline : String,
    fundstatus : String,
    desc : String,
    futureplan : String,
    revenue : String,
    website : String,
    linkedIn : String,
    size : String,
    fname : String,
    phone : String,
    email : String,
    linkedin : String,
    college : String,
    dept : String,
    year : String
})

const startup_model = mongoose.model('startup-data', startup);
module.exports = startup_model