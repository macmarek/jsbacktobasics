function ceo() {
    console.log("let's change universe!");
    cto();
}

function cto(){
    console.log("let's change the world");
    techlead();
}

function techlead(){
    console.log("let's write new Javascript framework");
    developer();
}

function developer(){
    console.log("let's copy some code from Stack Overflow");
    throw new Error("oops, the code did not work");
}

ceo();