function a(n){
    console.log(n);
    n=10;
    console.log(n);
}

function b(o){
    console.log(o.num);
    o.num = 10;
    console.log(o.num);
}

var num = 5;
a(num);
console.log(num);

var obj = {num: 5};
b(obj);
console.log(obj.num);