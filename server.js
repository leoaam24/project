const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.send('Hello World');
});

//MIDDLEWARE


//ROUTE

const port = 3000;

app.listen(process.env.port || port);
console.log('Web Server is listening at ' + (process.env.port || port));