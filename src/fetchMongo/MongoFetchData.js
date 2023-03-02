const connectionString = require('../../configs/mongodb.json')
const User = require('../../Schemas/schema')
const mongoose =  require('mongoose')

const uri = connectionString[0].connectionUrl;

const connectDB = async() =>{
    try{
        await mongoose.connect(uri);
        console.log("DB connected");
        getUsers();
    }catch(error){
            console.log("Conncection Err"+ error.message);
    }
}
async function getUsers() {
    try {
      const users = await User.find({});
      console.log('Found users:', users);
    } catch (err) {
      console.error('Error getting users', err);
    }
  }
module.exports = connectDB;