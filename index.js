const express =require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./data/mydata.json')
app.use(cors()); 
app.use(bodyParser.json());
app.post('/load',(req,res)=>{
    res.status(200).send(data);
})
app.listen(8081,()=>{
    console.log("Server listening on P 8081...");
})
