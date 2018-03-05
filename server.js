const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));
http.listen(process.env.PORT || 3000, function() {
    console.log('listening on', http.address().port);
});