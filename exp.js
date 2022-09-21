const express = require("express");
const path = require("path");
const bodyparser=require("body-parser")
const app = express();
const port = process.env.PORT || 8080;
app.use(bodyparser.urlencoded({ extended: false}));
app.use(express.json());





app.post('/users',(req,res) =>{
 const {name,age} = req.body;
 res.send([name,age])
});


app.get("/users/:id", (req, res) => {
  res.send({
     id : req.params.id,
     path:"/users/" +req.params.id,
   });
 });

app.listen(port, () => {
  console.log(`Ready listening on ${port}`);
});