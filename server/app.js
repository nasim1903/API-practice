const express = require("express");
const app = express();

const menu = {
    starters: ["Fries", "Garlic Breads", "Fries"],
    mains: ["Burger and Chips", "Steak", "Chicken"],
    deserts: ["Pancakes", "Ice Cream", "Cake"],
    specials: {
        "monday": "dover sole",
        "tuesday": "porterhouse steak"
    }
}

app.get("/", (req, res) => {
    res.send("Welcome to the Nasim Store!")
})


app.get("/menu", (req,res) => {
    res.json(menu)
})

app.get("/specials/:day", (req,res) => {

    const day = req.params.day    

    const specials = menu["specials"][day]

    res.json({
        "specials": specials
    })

})


module.exports = app;

