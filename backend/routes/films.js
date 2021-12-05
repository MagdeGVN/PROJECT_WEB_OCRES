var express = require("express");
var router = express.Router();
const {MongoClient} = require('mongodb');
/* GET film page. */

const url = `mongodb://localhost:27017/web_projectDB`;
const client = new MongoClient(url);
const dbName = "web_projectDB";

// /films/3
router.get("/:id", function(req, res, next) {
  res.send("I wanna cry ;-;");
});

router.post("/",async (req,res)=>{
  console.log(cc);
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('documents');
  collection.insertOne(res);
});



module.exports = router;