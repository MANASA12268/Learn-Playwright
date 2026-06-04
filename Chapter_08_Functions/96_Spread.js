function some(a,b,c){
    return a+b+c;
}
let num = [1,2,3]
some(...num)


let responsecode = [200,201,404];

function haserror(...code){
    return code.some(c=>c>=400);
}

haserror(...responsecode); // true
console.log(haserror(...responsecode));