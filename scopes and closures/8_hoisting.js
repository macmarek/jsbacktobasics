//(1) no actually in spec
//just a mental thing - way of thinking

a; //???
b; //???
var a = b;
var b = 2;
b; //2
a; //???

//1'st will compile and find all declarations...
//-------------------->

var a;
var b;
a;
b;
a = b;
b = 2;
b;
a;

//(2) functions:
var a = b();
var c = d();
a; //???
c; //???

function b(){ //function declaration
    return c;
}

var d = function() { //function expression
    return b();
};
//------------>
function b(){
    return c;
}
var a;
var c;
var d;
a = b();
c = d();
a;
c;
d = function(){
    return b();
};

// (3) 1.functions first 
//     2.duplicated function declarations are overwritten
// key takeaway: don't re-use identifier names to avoid this weirdness

foo(); //"foo"

var foo = 2;

function foo(){
    console.log("bar");
}

function foo() {
    console.log("foo");
}

// (4) why hoisting - recursion?
// mutual recursion ...
// a calling b calling c
// in C - header files are "manual hoisting"

a(1);

function a(foo){
    if(foo>20) return foo;
    return b(foo+2);
}
function b(foo){
    return c(foo) + 1;
}
function c(foo){
    return a(foo*2);
}

//39


