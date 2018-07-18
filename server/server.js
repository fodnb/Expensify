var express = require('express');
var path = require('path');
var PORT = process.env.PORT || 3000;
var app = express();

var publicPath = path.join(__dirname, "..", 'public');
console.log(publicPath);
app.use(express.static(publicPath));

app.get('*', (request, response)=> {
    response.sendFile(publicPath + 'index.html');
});

app.listen(PORT, ()=> {
    console.log("app listening on port 3000");
});