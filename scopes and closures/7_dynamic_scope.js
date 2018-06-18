//theoretical dynamic scope ...
function foo(){
    console.log(bar);
}

function baz(){
    var bar = "bar";
    foo();
}

baz();

//runtimes decision vs compile time decision in lexical scopes