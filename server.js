const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));
http.listen(process.env.PORT || 8080, function() {
    console.log('listening on', http.address().port);
});