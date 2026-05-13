var v = 12;
let l = 13;
const c = 14;

var browser = "chrome"
var browser = "firefix" //Redeclaration allowed with var
browser = "edge" //Reassinment allowed by var

// for functions 
var testcase = [ "login", "logout", "signup" ];
for ( var i = 0; i < testcase.length; i++ ) {
    console.log( testcase[ i ] );
}

console.log( "loop counter leaked outside:", i );

console.log( "hello" );
console.log( "hello" );
console.log( "hello" );

function say() {
    console.log( "Hi from function" );// instaed of writing console.log("hello")multiple times we can write a function and call it multiple times

}
say();
say();
