"use strict";

/**
 * This file contains schema definition and a
 * model based on the schema
 * 
 * This module creates a Mongoose model 
 * 
**/


const mongoose = require("mongoose");

/** Define schema and make a model out of it */

/**

Example:
-------------- 


// Schema: 
var listSchema = new mongoose.Schema({
    name: String,
    description: {
        type: String,
        default: "No Description available"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Model:
mongoose.model("List", listSchema);
    
**/