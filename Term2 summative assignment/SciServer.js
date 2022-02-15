const express = require('express');
const app = express();

app.use(express.static(`science`));

app.get('/', function (req, resp){
    resp.send();
});

app.listen(8090);