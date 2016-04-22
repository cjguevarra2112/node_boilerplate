"use strict";

/**
    This file contains configurations for the main express application. This module returns the
    user-configured main express object "app". Configurations for the express app are as follows:
        
        + app variables like "env"(environment the app is run) and "port"(port number)
        + Body parser      - for easy parsing of request bodies(json/url encoded)
        + Method override  - overrides PUT and DELETE methods for devices that dont support it
        + Morgan           - for logging HTTP request/response informations
        + Compression      - HTTP compression for production environment only
        + Static directory - folder for client-side application and assets
        + Module endpoints - root url endpoints of each module
        + Error handlers   - middleware that handles 404 and other types of error
**/

const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const morgan = require("morgan");
const compression = require("compression");

let app = express();

/** Express app variables **/ 
app.set("env", process.env.NODE_ENV || 'development');
app.set("port", process.env.PORT || 3000);

/** body-parsing and method support for PUT and DELETE **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());

/** logging(development) and HTTP compression(production) **/
if (app.get("env") === "development") {
    app.use(morgan("dev"));
} else {
    app.use(compression());
}

app.use(express.static("./public"));

// Register module endpoints here
app.use("/api/lists/", require("../lists/lists.server.routes"));

// Error handlers
// For: route not found 404
app.use((req, res, next) => {
    let err = new Error("Route Not Found.");
    err.status = 404;
    next(err);
});

// For any other errors
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.setHeader("Content-Type", "application/json");
    res.json({
        success: false,
        message: err.message,
        error: err
    });
});

module.exports = app;





