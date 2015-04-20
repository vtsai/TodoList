var connect = require('connect'),
    serveStatic = require('serve-static');

//require("babel/register");
var app = connect();

app.use(serveStatic(__dirname+"/public"));
app.listen(8080);
