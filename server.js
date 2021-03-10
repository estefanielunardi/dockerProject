var express = require('express');
var path = requiere('path');
var fs = require('fs');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(_dirname, "index.html"));
});

app.get('/https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large?v=1.0&px=999', function( req, res){
    var img = fs.readFileSync('profile-1.jpg');
    res.writeHead(200, {'Content-Type': 'image/jpg'});
    res.end(img, 'binaty');
});

app.listen(3000, function() {
    console.log("app listening on port 3000!");
});