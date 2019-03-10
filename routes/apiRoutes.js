var theData = require("");

module.exports = function (app) {
    app.get("/api/data", function (req, res) {
        res.json(theData);
    });
};
