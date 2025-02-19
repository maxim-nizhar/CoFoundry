const express = require("express");
const app = express();

app.get("/user", (req, res) => {
    res.send({firstName: "Akshay", lastName: "Saini"})
})

app.post("/user", (req, res) => {
    res.send("Data Successfully Saved To The Database!")
})

app.delete("/user", (req, res) => {
    res.send("Deleted Successfully!")
})

app.listen(7777, () => {
    console.log("Port running on 7777");
})