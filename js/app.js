"use strict";
// Unknown & Never Types 
var userInput;
var userName;
userInput = 10;
userInput = 'vzan2012';
if (typeof userInput === 'string')
    userName = userInput;
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
    // while(true){}
};
generateError('Error Occured', 500);
