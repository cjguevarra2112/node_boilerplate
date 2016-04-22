"use strict";

/**
    This file contains configuration for environment specific settings
    like:
    
       - Secret key (for token generation)
       - Database connection string, and the like.
       
    This module returns an object containing the above configs depending
    on the environment the application is run on.

**/

let env = process.env.NODE_ENV || 'development';
let config = {
    'development' : {
        'secretKey': '6mq1D557f3ASnMzdFV54O3l3TC12LVU0',
        'dbString': 'mongodb://localhost/meandb' 
    },
    'production': {
        'secretKey': '',
        'dbString': ''
    }
};

module.exports = config[env];