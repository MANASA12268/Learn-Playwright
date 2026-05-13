//Java engine
// line by line ,JIT Compilation
console.log( greeting );
var greeting = "hello"
console.log( greeting );

//Behind the scenes//

// var greeting; <-- hosted with undefined
// console.log(greeting); <-- undefined
//greeting ="hello" <---assignment stays in place
// console.log(greeting); <-- hello
