var express = require('express')

const SERVER_PORT = 8089

var app = express()

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>")
})


//http://localhost:8089/user?firstname=niall&lastname=whyte
//query parameter
app.get("/user", (req, res) => {
    res.json(req.query)
})

//http://localhost:8089/user/niall/whyte
//path parameter
app.post("/user/:firstname/:lastname", (req, res) => {
    const {firstname, lastname} = req.params
    res.send(`First name: ${firstname} Last name: ${lastname}`)
})


app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})