"use strict";
var logged;
var sendAnalytics = function (data) {
    logged = true;
    return console.log(data);
};
sendAnalytics('Analytic Data');
//# sourceMappingURL=analytics.js.map