var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "food_buddy"
});

if (process.argv[2] === "vegetable") {
    vegetableAdd(process.argv[3]);
} else if (process.argv[2] === "herb") {
    herbAdd(process.argv[3]);
} else if (process.argv[2] === "dairy") {
    dairyAdd(process.argv[3]);
} else if (process.argv[2] === "meat") {
    meatAdd(process.argv[3]);
} else {
    console.log(
        "Input not recognized"
    );
}

function vegetableAdd(x) {
    x = x.toUpperCase();
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO vegetable (FoodItem, TimestampQ) VALUES ( ? , now())";
        con.query(sql, x, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted", result);
        });
    });
}

function herbAdd(x) {
    x = x.toUpperCase();
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO herb (FoodItem, TimestampQ) VALUES ( ? , now())";
        con.query(sql, x, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted", result);
        });
    });
}

function dairyAdd(x) {
    x = x.toUpperCase();
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO dairy (FoodItem, TimestampQ) VALUES ( ? , now())";
        con.query(sql, x, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted", result);
        });
    });
}

function meatAdd(x) {
    x = x.toUpperCase();
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO meat (FoodItem, TimestampQ) VALUES ( ? , now())";
        con.query(sql, x, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted", result);
        });
    });
}

