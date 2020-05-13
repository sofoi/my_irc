console.log("Keep an eye on matrix");
const express = require('express')
const app = express()


const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4242;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

app.get('/', function(req, res) {

})