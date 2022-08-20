
require("./db/conn");
const User = require("./models/userSchema");
const express = require("express");
//const bodyParser = require("body-parser");
const ejs = require("ejs");
const routes = require("./routes/taskRoutes");

const app = express();
var _ = require("lodash");
const { response } = require("express");

var url = "mongodb://localhost:27017/taskdb";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("public"));

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

app.use('/', routes);

app.listen(3000, function() {
  console.log("Server started on port 3000");
});


