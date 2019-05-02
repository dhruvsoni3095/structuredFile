/*
let a;
a=1;
a='s';
a='a';

let ba: number;
b='a';
*/
/* if the type of the variable would be any like
let a; //its any
them assigning any value to it not show any error in the type script as well
so we do type annotations*/
//type annotations
var a;
a = 5;
var b;
var c;
var d;
var e;
var f = [1, 'any', true, 34.3];
var g = [1, 2, 3, 4];
/*we cant cange the value of constant*/
var ColorRed = 0;
var ColorBlue = 1;
var ColorGreen = 2;
console.log(ColorRed);
/*ColorRed=8;*/
/* we can put all the related constants in a container called enum*/
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
var backg = Color.Red;
console.log(Color.Red);
console.log(a);
