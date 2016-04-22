"use strict";

/**
    This module returns a mongoose database object for querying mongodb collections.
    Application models must be registered in the db object first.
    
**/

const mongoose = require("mongoose");
const envConf = require("./env");
const db = mongoose.connect(envConf["dbString"]);

// Register models here


module.exports = db;