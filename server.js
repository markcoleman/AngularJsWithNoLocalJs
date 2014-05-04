var express = require('express')
    , app = express()
    , directory = __dirname;

app.use(express.static(directory))
    .use(express.bodyParser());

app.post("/save", function(req, res){
    console.log(req.body);
    res.redirect(301, 'thankyou.html');
});

app.listen(8080,function(){
    console.log("Listening on 8080 and serving content from " + directory);
});