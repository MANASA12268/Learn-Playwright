// with parameters no return value

function greetbyName(name){
    console.log("hi" ,name);

}

greetbyName("manasa");
let result= greetbyName("sunny")
console.log(result); // undefined because there is no return type




function begger(money){
    console.log("thanks" , money);

}

let returnmesomething = begger(100);
console.log(returnmesomething); // undefined because there is no return type