// 1.useful example for loop 
// var i is intended to be local to the for loop but it's not

function foo() {
    var bar = "bar";
    for (let i=0; i<bar.length; i++){
        console.log(bar.charAt(i));
    }

    console.log(i); //ReferenceError
}

//2. if statement
function foo(bar){
    if(bar){
        let baz = bar;
        if(baz){
            let bam = baz;
            console.log(bam); //"ok"
        }
        console.log(bam); //Error
    }
    console.log(baz); //Error
}

foo("ok");

//let is a new var? - different opinions...
//problems:
//* let is not hoisted
//* requires chane of thinking
// trick trace-er, le-er
// compiles let to try catch trick..
