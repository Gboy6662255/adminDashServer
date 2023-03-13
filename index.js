const express =require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./data/mydata.json')
const { connectDB, getUsers } = require('./src/fetchMongo/MongoFetchData');

app.use(cors()); 
app.use(bodyParser.json());
connectDB();
app.post('/load',async(req,res)=>{
    try {
        const result = await getUsers();
        res.status(200).send(result);
      } catch (err) {
        console.error("Error getting aggregation result:", err);
        res.status(500).send("Error getting aggregation result");
      }
})
app.listen(8081,()=>{
    console.log("Server listening on P 8081...");
})
