// Functions
var add = function (n1, n2) { return n1 + n2; };
var printResult = function (num) { console.log("Result is " + num); return; };
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
printResult(add(6, 6));
var combineValues;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(9, 9));
addAndHandle(30, 30, function (result) {
    console.log(result);
});
