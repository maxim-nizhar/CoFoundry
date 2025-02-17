const express = require("express");
const app = express();


app.use("/tome", (req, res) => {
    res.send("Tome Tome Tome");
})

app.use("/chicken", (req, res) => {
    res.send("Chicken Chicken Chicken")
})

app.use("/", (req, res) => {
    res.send("Welcome to the main page")
})

app.listen(7777, () => {
    console.log("Port running on 7777");
})