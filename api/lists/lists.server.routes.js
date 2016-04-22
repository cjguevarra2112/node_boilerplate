"use strict";

/**
 * This file contains route endpoints with their corresponding
 * controller middlewares
 * 
 * This module returns an express router object
 * 
 */

const express = require("express");
const router = express.Router();

/** Require necessary controller middlewares */
const lists = require("./lists.server.controller");

/** Map url endpoints to their corresponding controller middlewares */
router.get("/", lists.list);
router.get("/:_id", lists.get);

module.exports = router;