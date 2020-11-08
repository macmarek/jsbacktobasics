function tobin(x) {
    var binary = "";

    var temp = x;

    while(temp > 0){
        var mod = temp % 2;
        binary = (mod === 1 ?"1":"0")+binary;
        temp = Math.floor(temp/2);
    }

    return binary;
}

var a = 10;

console.log(tobin(a));