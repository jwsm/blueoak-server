/*
 * Copyright (c) 2015-2016 PointSource, LLC.
 * MIT Licensed
 */
exports.init = function(service1, callback) {
    service1.add('consumer1');
    callback();
};