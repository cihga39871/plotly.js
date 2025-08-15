'use strict';

var Plotly = require('./core');

Plotly.register([
    // traces
    require('./heatmap'),

    // components
    require('./calendars'),
]);

module.exports = Plotly;
