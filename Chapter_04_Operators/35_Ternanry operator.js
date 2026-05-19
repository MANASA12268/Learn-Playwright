let Manasa = 18;
let manasa_will_go_to_goa = Manasa>=18 ? "Manasa will go goa" : "Manasa will not go goa";
console.log(manasa_will_go_to_goa);


let score = 50;
let result = score > 50 ? "Pass" : "Fail";
console.log(result);

let number =7;
let result = number%2 === 0? "even" : "odd";
console.log(result);

let number = -5;
let result = number>0? " positive" : "negative";
console.log(result);

let loggedin = true;
let message = loggedin? "welcome" : "please loggedin";
console.log(message);

let x = 10;
let y = 20;
let max = y>x? x:y;
console.log(max);

let x= 10;
let y = 20;
let z= 15;
let max = x>y? (x>z? x:z) : (y>z? y:z);
console.log(max);

let actualstatuscode =200;
let expectedstatuscode = 200;
let result = actualstatuscode === expectedstatuscode? "pass" : "fail";
console.log(result);

let envinorment = "production"
let baseUrl = envinorment === "production" ? "https://api.production.com": 
" https://api.staging.com"; 
console.log(baseUrl);

let isCI = true;
let browserMode = isCI? "headless" : "headed";
console.log( "Launching browser in :", browserMode, "mode");

let time = 10;
let shopopen = time===10? "shop will open" : "shop will not open";
console.log("morning at 10 o clock", shopopen);

// Nested ternary operator
let score =85;
let grade = score >= 90 ? "A" : score >80 ? "B" : score >80 ? "C" : "D";
console.log( grade);

let age =18;
let message = age <= 18 ? (age<15? "he will drink" : "No") : "He will drink juice";
console.log(message);

let statuscode = 404;
let result = statuscode <400? "success"
: statuscode>500 ? "client error" 
: statuscode===300 ? " server error" : "unknown error";
console.log(result);

let a= 10;
let b = 20;
let max = a>b? a:b;
console.log(max);

let a= 10, b=20,c=15;
let max = a>b? (a>c? a:c) : (b>c? b:c);
console.log(max);