const express =require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./data/mydata.json')
const { connectDB, active, getUsers } = require('./src/fetchMongo/MongoFetchData');

app.use(cors()); 
app.use(bodyParser.json());
connectDB();
app.post('/load',(req,res)=>{
    getUsers();
    res.status(200).send(data);
})
app.listen(8081,()=>{
    console.log("Server listening on P 8081...");
})
