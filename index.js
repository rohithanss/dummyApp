const express = require('express');
const app = express();

app.get('/',function(req, res) {
    const ipAddress = req.ip;
    res.send({ipAddress});
});

app.listen(8000, () => console.log(`Server is listening on port 3000`))