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
} else if (process.argv[2] === "fish") {
    fishAdd(process.argv[3]);
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
        var sql = "INSERT INTO userID (vegetable, herb, meat, fish, dairy, recordName, recorded, vegFirstAlert, vegSecondAlert, herbFirstAlert, herbSecondAlert, meatFirstAlert, meatSecondAlert, fishFirstAlert, fishSecondAlert, dairyFirstAlert, dairySecondAlert) VALUES (True, False, False, False, False, ? , now(), NOW() + INTERVAL 3 DAY, NOW() + INTERVAL 5 DAY, NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 4 DAY, NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 3 DAY, NOW() + INTERVAL 1 DAY, NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 5 DAY, NOW() + INTERVAL 8 DAY)";
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
        var sql = "INSERT INTO userID (vegetable, herb, meat, fish, dairy, recordName, recorded, vegFirstAlert, vegSecondAlert, herbFirstAlert, herbSecondAlert, meatFirstAlert, meatSecondAlert, fishFirstAlert, fishSecondAlert, dairyFirstAlert, dairySecondAlert) VALUES (False, True, False, False, False, ? , now(), NOW() + INTERVAL 3 DAY, NOW() + INTERVAL 5 DAY, NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 4 DAY, NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 3 DAY, NOW() + INTERVAL 1 DAY, NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 5 DAY, NOW() + INTERVAL 8 DAY)";
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
        var sql = "INSERT INTO userID (vegetable, herb, meat, fish, dairy, recordName, recorded, vegFirstAlert, vegSecondAlert, herbFirstAlert, herbSecondAlert, meatFirstAlert, meatSecondAlert, fishFirstAlert, fishSecondAlert, dairyFirstAlert, dairySecondAlert) VALUES (False, False, True, False, False, ? , now(), NOW() + INTERVAL 3 DAY, NOW() + INTERVAL 5 DAY, NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 4 DAY, NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 3 DAY, NOW() + INTERVAL 1 DAY, NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 5 DAY, NOW() + INTERVAL 8 DAY)";
        con.query(sql, x, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted", result);
        });
    });
}

function fishAdd(x) {
    x = x.toUpperCase();
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO userID (vegetable, herb, meat, fish, dairy, recordName, recorded, vegFirstAlert, vegSecondAlert, herbFirstAlert, herbSecondAlert, meatFirstAlert, meatSecondAlert, fishFirstAlert, fishSecondAlert, dairyFirstAlert, dairySecondAlert) VALUES (False, False, False, True, False, ? , now(), NOW() + INTERVAL 3 DAY, NOW() + INTERVAL 5 DAY, NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 4 DAY, NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 3 DAY, NOW() + INTERVAL 1 DAY, NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 5 DAY, NOW() + INTERVAL 8 DAY)";
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
        var sql = "INSERT INTO userID (vegetable, herb, meat, fish, dairy, recordName, recorded, vegFirstAlert, vegSecondAlert, herbFirstAlert, herbSecondAlert, meatFirstAlert, meatSecondAlert, fishFirstAlert, fishSecondAlert, dairyFirstAlert, dairySecondAlert) VALUES (False, False, False, False, True, ? , now(), NOW() + INTERVAL 3 DAY, NOW() + INTERVAL 5 DAY, NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 4 DAY, NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 3 DAY, NOW() + INTERVAL 1 DAY, NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 5 DAY, NOW() + INTERVAL 8 DAY)";
        con.query(sql, x, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted", result);
        });
    });
}
