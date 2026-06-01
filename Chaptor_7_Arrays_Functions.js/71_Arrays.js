//creating Arrays// Array Literal (preferred)
let browsers = ["chrome","Firefox","edge"];





let scores = new Array(3); // here the 3 is length
 scores[0] =1;
 scores[1] = 1;
 scores[2] = 1;
let scores2 = new Array (1,2,3);
console.log(scores);
console.log(scores2);

let numbers = new Array(100,200,300,400);// 0-3:4
console.log(numbers)

let test = Array.of(10,20,30,40);
console.log(test)

// Array.from()
let chars = Array.from("hello");
console.log(chars)

let number1 = Array.from("1234")
console.log(number1)


