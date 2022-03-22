const express  = require('express')
const app = express()
const port = 3000

app.get('/',(req, res) => res.sendfile(__dirname + '/index.html'))
app.listen(port, () => console.log('app on port ${port}!'))

app.get(/^(.+)$/, function(req,res){
    console.log('static file requires: ' + req.params);
    res.sendfile(__dirname + req.params[0]);
});
//later run node app.js