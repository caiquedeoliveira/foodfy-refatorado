const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const recipes = require("./database/data")


server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.get("/", (req, res) => {
    return res.render("home", {items: recipes})
})

server.get("/about", (req, res) => {
    return res.render("about")
})

server.get("/recipes", (req, res) => {
    return res.render("recipes", {items: recipes})
})

server.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;
    if(!recipes[recipeIndex]) {
        return res.render("not-found")
    }
    
    return res.render("recipe", {item: recipes[recipeIndex]})
  })

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, () => {
    console.log("server is running")
})
