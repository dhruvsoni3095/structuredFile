// defining functions in js
var log = function (message) {
    console.log(message);
};
// defining function in type script with one line code
var doLog = function (message) { return console.log(message); };
//with multiple lines of code
var doLog2 = function (message) {
    console.log(message);
};
//without parameter
var doLog1 = function () { return console.log(); };
log('hello');
doLog('1st log');
doLog2('2nd log');
doLog1();
