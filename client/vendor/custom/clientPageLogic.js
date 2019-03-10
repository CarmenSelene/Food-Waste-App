var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "projectTEST"
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
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO testOne (FoodCategory, FoodItem, TimestampQ) VALUES ('vegetable', ? , now())";
        con.query(sql, x, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted", result);
        });
    });
}

function herbAdd(x) {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO testOne (FoodCategory, FoodItem, TimestampQ) VALUES ('herb', ? , now())";
        con.query(sql, x, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted", result);
        });
    });
}

function dairyAdd(x) {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO testOne (FoodCategory, FoodItem, TimestampQ) VALUES ('dairy', ? , now())";
        con.query(sql, x, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted", result);
        });
    });
}

function meatAdd(x) {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO testOne (FoodCategory, FoodItem, TimestampQ) VALUES ('meat', ? , now())";
        con.query(sql, x, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted", result);
        });
    });
}

function getData() {
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
