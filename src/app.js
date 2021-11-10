// setup express handle
const express = require("express");

// create the application handle
const app = express();

// START application configuration section

// permet de gerer les inputs json (ex : postman)
app.use(express.json());
// permet de gerer les inputs à partir d'un formulaire
app.use(express.urlencoded({ extended: true }));

// add a middleware
app.use(function (req, res, next) {
    
    let now = new Date();
    //dateformat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    console.log('Time:', now.toISOString());
    console.log("REQUEST HEADERS")
    console.log(req.headers);
    console.log("RESPONSE HEADERS")
    console.log(res.headers);
    next();
  });

// On charge "path"
const path = require("path");

// On autorise le dossier "public"
app.use(express.static(path.join(__dirname, "public")));

// simple greeting route
app.get("/", (request, response) => {
    //console.log("GET / requested");
    //console.log(request.query);
    let name = request.query.name || '';
    response.status(200).send(`<center><h1>Bienvenue ${name}</h1></center>`);
});

// exemple pour mettre un route en place
//const usroutes = require('./route/usroutes');
//app.use('/',usroutes);

// END application configuration section

// export the application
module.exports = app;