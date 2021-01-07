var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

require('./config/database')
var router = express.Router();
app.use(router);
app.use(require('./app/routes/tarjeta'))
app.use(require('./app/routes/usuario'))




app.listen(3000, function() {
console.log("Node server running on http://localhost:3000");
});

