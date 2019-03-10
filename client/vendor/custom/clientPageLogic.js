var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "projectTEST"
});

function updateTableOnClick() {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("SELECT * FROM projecttest.testone", function (err, result) {
            if (err) throw err;
            let Cat = result.FoodCategory;
            let Food = result.FoodItem;
            let Time = result.TimestampQ;
            console.log(Cat, Food, Time);
        });
    });
}

