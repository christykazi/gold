
const express = require("express");
const path = require('path');
const app = express();
app.use(express.static('public'));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs")

app.get("/", (req, res) => {
res.render("Homepage")
});

app.get("/contact", (req, res) => {
    res.render("contactus")
    });

app.get("/services", (req, res) => {
    res.render("Ourservices")
        });


app.listen(3000);