import express from "express";
import { getRestaurants, getAll, getRestaurant } from "./restaurant.js";

var app = express()
const port = 3000;

const restaurants = [
  {
    name: "spicy",
    address: "Le Lamentin"
  },
  {
    name: "spicy2",
    address: "Le Lamentin"
  },
  {
    name: "spicy3",
    address: "Le Lamentin"
  },
]

//const personnages = 

app.set("view engine", "ejs")
// respond with "hello world" when a GET request is made to the homepage

app.use(express.static("public"));

app.get('/', async function(req, res) {
  //res.send('hello world, Life is beautiful !');
  const data =  await getRestaurants();
  console.log("app.js:GetRestaurant -----------------")
  console.log(data)
  res.render("home.ejs", {title: "Accueil", list: data})
});

app.get('/restaurant', async function(req, res) {
  console.log(req.query)
  const data = await getRestaurant(req.query.id)
  console.log(data)
    res.render("restaurant.ejs", {data: data})
});

app.get('/page2', function(req, res) {
    res.send('hello world, its me');
  });

app.listen(port, () => {
    console.log("Example app listening on port ");
})