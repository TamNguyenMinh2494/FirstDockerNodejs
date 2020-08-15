var app = require('express')()

app.get("/ping", (req, res) => {
    res.send("hello world");
})
app.listen("0.0.0.0:3000", () => {
    console.log("Hello world");
})
