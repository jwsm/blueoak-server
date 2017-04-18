/*
 * Copyright (c) 2015-2016 PointSource, LLC.
 * MIT Licensed
 */
//uses async init to set initialized to true
var initialized = false;

exports.init = function(service1, callback) {
    if (service1.isInitialized()) {
        initialized = true;
    }
    callback();
};

exports.isInitialized = function() {
    return initialized;
};