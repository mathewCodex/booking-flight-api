const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");

const app = express();

app.use(json());

mongoose.Promise = global.Promise;
//creating static middleware..



app.use(bodyParser.json());
//setting up our routes for express to know we ant to use the route..
//this initialize the routes..
app.use("/api", routes);
//creating middle ware for error handling
app.use(function (err, req, res, next) {
  //console.log(err)
  res.status(400).send({ error: err.message });
});
// app.get('/',function(req,res){
//   console.log('GEt request')
//   res.send({name:'mathew'});
// })
//listening for request..
//when deploying this app there might be a environment variable which provides ..
//port to listen to so we will provide one



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
