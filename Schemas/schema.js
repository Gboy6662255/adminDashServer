const mongoose =require('mongoose')

const {Schema} = mongoose;

const userSchema = new Schema({
    Organization:{
        type:String
    },
    TotalUsers:{
        type: Number
    },
    activeUsers:{
        type:Number
    }
})
const User = mongoose.model('User',userSchema);

module.exports = User