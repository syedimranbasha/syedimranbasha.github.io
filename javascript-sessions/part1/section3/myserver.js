var express = require('express');
var bodyParser = require('body-parser');
var app     = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/myaction', function(req, res) {
    console.log("UserName " + req.body.username);
    console.log("Password " + req.body.password);
    console.log("Gender " + req.body.gender);
    console.log("Sports " + req.body.sports);
    console.log("Course " + req.body.course);
    console.log("Feedback " + req.body.feedback);
    res.send('Received you information !!');
});

app.listen(8080, function() {
    console.log('Server running at http://127.0.0.1:8080/');
});