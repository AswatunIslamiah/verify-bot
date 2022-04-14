const express = require('express');

const server = express();



server.all('/', (req, res)=>{

   res.setHeader('Content-Type', 'text/html');

   res.write('This is Aswa Bot');

   res.end();

})



function keepAlive(){

   server.listen(3000, ()=>{console.log("Aswa is online!")});

}



module.exports = keepAlive;
