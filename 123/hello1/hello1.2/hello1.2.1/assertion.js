/*when we put msg. then there would be intelligent scroll
that what functions we have and apply to string*/
var msg = 'abc';
var x = msg.endsWith('c');
/*problem : is when we do*/
var mesage;
mesage = 'abx';
var y = mesage.endsWith('c');
/* we dont get the intelligent scroll when the cursor
cursor comes to message. */
/*solution: Type Assertion (Or type casting)*/
var message;
message = 'abx';
var y2 = message.endsWith('c'); //1st way
var nextY = message.endsWith('c');
console.log(x, y, y2, nextY);
