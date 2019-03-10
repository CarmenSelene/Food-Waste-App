var express = require("express");
var exphbs = require("express-handlebars");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "projectTEST"
});

con.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + con.threadId);
});

app.get("/", function (req, res) {
    con.query("SELECT * FROM projecttest.testone;", function (err, data) {
        if (err) throw err;
        // Test it
        console.log(data);
        // Test it
        // return res.send(data);
        res.render("index", {data: data});
    });
});

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});