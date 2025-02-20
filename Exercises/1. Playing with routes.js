const express = require("express");
const app = express();

//Dynamic Routing
// http://localhost:7777/user?userId=101&password=test
app.get("/user", (req, res) => {
    res.send(req.query)
})

//Query Params
// http://localhost:7777/user/707
app.get("/user/:userId", (req, res) => {
    res.send(req.params)
})

//---------
app.get("/user", (req, res) => {
    res.send({firstName: "Akshay", lastName: "Saini"})
})

app.post("/user", (req, res) => {
    res.send("Data Successfully Saved To The Database!")
})

app.delete("/user", (req, res) => {
    res.send("Deleted Successfully!")
})

//Regex pattern matching
app.get("/ke*ex", (req, res) => {
    res.send("Regex patterns learned => ke*ex  || Allowed => kedex, kefex, kejex")
})

//Regex pattern matching
app.get("/deg+ex", (req, res) => {
    res.send("Regex patterns learned => deg+ex || Allowed => degex, deggggex")
})

//Regex pattern matching
app.get("/te(ge)?x", (req, res) => {
    res.send("Regex patterns learned => te(ge)?x || Allowed => tegex, tex")
})

app.listen(7777, () => {
    console.log("Port running on 7777");
})