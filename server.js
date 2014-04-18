/**
 * Created by colemanm on 3/27/14.
 */
var express = require('express')
    , app = express()
    , directory = __dirname;

app.use(express.static(directory))
    .use(express.bodyParser());

app.get('/hello.txt', function(req, res){
    res.send('Hello World');
});
app.post("/save", function(req, res){
    console.log(req.body);
    res.redirect(301, 'thankyou.html');
});

var server = app.listen(8080,function(){
    console.log("Listening on 8080 and serving content from " + directory);
});