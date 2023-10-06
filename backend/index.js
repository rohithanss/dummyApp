const express = require('express');
const app = express();
const cors = require("cors")
app.use(cors({
    origin: '*'
}));
app.get('/',async function(req, res) {
    try{
        const ipAddress = req.ip;
        res.send({ipAddress, resp});
    }catch(err){res.send({err, status: false})}
});

app.listen(8000, () => console.log(`Server is listening on port 3000`))