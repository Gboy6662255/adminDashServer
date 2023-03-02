const express =require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./data/mydata.json')
const connectDB = require('./src/fetchMongo/MongoFetchData')

app.use(cors()); 
app.use(bodyParser.json());

app.post('/load',(req,res)=>{
    console.log(req.method);
    connectDB();
    res.status(200).send(data);
})
app.listen(8081,()=>{
    console.log("Server listening on P 8081...");
})
