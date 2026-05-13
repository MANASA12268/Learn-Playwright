// let is a blocked scope 
let a = 10;

let retrycount = 0;
retrycount = retrycount + 1;
retrycount = retrycount + 1;
console.log( "Retryattempt count is:", retrycount );

let retrycount = 4; //redeclartion not allowded with let and this is syntax error

let status = pending;
if ( status === pending ) {
    let executiontime = 200;
    console.log( "execution time is:", executiontime );

}
onsole.log( "execution time is:", executiontime ); // this will give reference error because  executiontime is not defined outside the blockscope of if statement

let name = "manasa"
name = "sandeep";// reassignment is allowed with let 
