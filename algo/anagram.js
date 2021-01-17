function is_anagram(a, b) {
    // count number of letters in a
    let aletters={};
    let bletters={};
    for(let key of a) {
        aletters[key] ? aletters[key]+=1 : aletters[key] = 1;           
    }

    // count number of letters in b
    for(let key of b) {
       bletters[key] ? bletters[key]+=1 : bletters[key] = 1;           
    }

    for(let key in aletters) {
        if(!bletters[key]){
            return false;
        }
        if(bletters[key] !== aletters[key]){
            return false;
        }
    }
    return true;
}

console.log(is_anagram('',''))
console.log(is_anagram('abc','cba'))
console.log(is_anagram('marek','keram'))
console.log(is_anagram('foobar','barfoo'))
console.log(is_anagram('abc','qwe'))
console.log(is_anagram('aabc','abc'))