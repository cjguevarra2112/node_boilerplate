"use strict";

/**
    Main application execution. Fetches a mongoose database object and
    an express app object.
    This will then start the server running in the specified address
    and port number.
**/

const db = require("./api/config/mongoose");
const app = require("./api/config/express");

let server = app.listen(app.get("port"), () => {
    let host = server.address().address;
    let port = app.get("port");
    
    console.log("Magic happens at " + host + ":" + port);
});