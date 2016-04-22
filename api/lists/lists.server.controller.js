"use strict";
/** 
 * This file contains Controller Middlewares.
 * This module returns all defined middlewares
 * 
**/

/** Require necessary module models **/

/** Define module middlewares **/

exports.list = (req, res, next) => {
    res.json({"list": [
        {id: 1, name: "List 1"},
        {id: 2, name: "List 2"}
    ]});
};

exports.get = (req, res, next) => {
    let _id = req.params._id || 1;
    res.json({id: _id, name: "Some list"});  
};