/*
 * Copyright (c) 2015-2016 PointSource, LLC.
 * MIT Licensed
 */
//uses async init to set initialized to true
var initialized = false;

exports.init = function(service2) {

    if (service2.isInitialized()) {
        initialized = true;
    }
};

exports.isInitialized = function() {
    return initialized;
};