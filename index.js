//import required node modules 
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

//instantiating express
const app = express();

//declare and initialize the port
const PORT = 3000;

//template engine setup
app.engine('handlebars',engine());
app.set('view engine','handlebars');
app.set('views', path.join(__dirname, 'views'));

//Middleware
app.use(express.static(path.join(__dirname,'static'))); //to serve static files
app.use('/',require(path.join(__dirname,'/routes/blog.js')));//to import routes exported in blog.js


//Listening at the given PORT
app.listen(PORT,()=>{
    console.log(`Blog app listening at http://localhost.${PORT}`);
});