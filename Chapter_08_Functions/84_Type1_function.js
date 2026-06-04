// Define
// no parameters no return type

function greet(){ // parameters
console.log("hello")
   

}

greet(); // call the function // arguments
let a= greet()
console.log(a); // undefined because there is no return type


function teststatus(status){
    return "Teststatus:" + status
}

let result = teststatus("pass");
console.log(result);



function testsuit(testname,status,time){
    return `${testname},is ${status} ${time}ms`
}

 let t = testsuit("login page","pass",300)
 console.log(t);
testsuit();


