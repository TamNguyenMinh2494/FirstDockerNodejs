var app = require('express')()

app.get("/ping", (req, res) => {
    res.send("hello world");
})

app.listen(3000, '0.0.0.0', () => {
    console.log("Hello world");
})
