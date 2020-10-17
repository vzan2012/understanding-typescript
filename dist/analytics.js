"use strict";
let logged;
let sendAnalytics = (data) => {
    logged = true;
    return console.log(data);
};
sendAnalytics('Analytic Data');
//# sourceMappingURL=analytics.js.map