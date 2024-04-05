import {Schema, models, model} from "mongoose";

const Startup = new Schema({
    user: String,
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
    college : String,
    dept : String,
    year : String
})

const startup = models.startup || model('startup', Startup);

export default startup;