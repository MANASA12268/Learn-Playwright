const greet = function(name){
    return `hi,${name}`;

}
let greeting = greet("manasa");
console.log(greeting); //hi,manasa


function greet1(name1){
    return `hi,${name1}`
}

// function as expression
const greet2 =function(name1){
        return `hi,${name1}`

}

console.log(greet1("manasa"));
console.log(greet2("sunny"));





const greet = function(Dashboard,time){
    return `${Dashboard}in ${time}ms`
}

console.log(greet("glam" , 300));
