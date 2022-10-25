const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

// mongoose.connect("mongodb://localhost:27017/todolistDB");
const today = new Date();
const itemsSchema = {
  name: String,
}
// const Item = mongoose.model("Item", itemsSchema);
// const item = [{name: "WakeUp"}, {name: "Run"}, {name: "walk"}, {name: "Eat"}];
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
}
let dateForamte = today.toLocaleDateString("en-US", options);
let itemList = [];
let workList = [];

app.get('/', function(req, res){
  res.render("lists", {listType: dateForamte, itemList: itemList, action: "/"});
});

app.post('/', function(req, res){
  let item = req.body.newItem;
  itemList.push(item);
  console.log(itemList);
  // res.redirect("/");
  res.render("lists", {listType: dateForamte, itemList: itemList, action: "/"});
});

app.get('/work', function(req, res){
  res.render("lists", {listType:"Work List" , itemList: workList, action: "/work"})
});

app.post('/work', function(req, res){
  let item = req.body.newItem;
  workList.push(item);
  console.log("Work item list: " + itemList);
  // res.redirect("/work");
  res.render("lists", {listType: "Work List", itemList: workList, action: "/work"})
});

app.listen(3000, function(){
  console.log("server started at 3000");
})
