// if (ourstatuscode>=200 && ourstatuscode<300)

// this is a perfectly a normal function

function validationstatuscode(status){
    if (statuscode>200 && statuscode<300){
        console.log("request is fine");
    }
}
// this is a function expression
const validationstatuscode_Exp = function(status){
    if (statuscode>200 && statuscode<300){
        console.log("request is fine");
    }
}

// this is an arrow function

const validationstatuscode=(status)=>{
     if (statuscode>200 && statuscode<300){
        console.log("request is fine");
}}

function test(a,b){
    console.log("hello");
    console.log(a+b)
}

test();
test(10,20);
const test2 =(a,b)=>{
    return "Hi "+ b
}

console.log(test2("Hi", "manasa"));