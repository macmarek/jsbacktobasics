//~2009 Benalman gave it a name
//immediately invoked function expression

//*immediate value (function expression), which can be immediately invoked
var foo = "foo";

(function (){
    var foo = "foo2";
    console.log(foo); //"foo2"
})();

console.log(foo); //"foo"

//2 - you can name iffe
// better stack trace
var foo = "foo";

(function mysuperIIfe(){
    var foo = "foo2";
    console.log(foo); //"foo2"
})();

console.log(foo); //"foo"

//3 - you can pass values to iife
//for exaple you can pass "global"/window object
//and assign to global object whatever you need to make global
var foo = "foo";

(function (bar){
    var foo = bar;
    console.log(foo); //"foo"
})(foo);

console.log(foo); //"foo"