let scores = [45,82,91,60,73];

// map- transform each element and return new array
let grades = scores.map(s=>s>70? "pass":"fail");
console.log(grades); // ["fail","pass","pass","fail","pass"];




//filter- return new array with elements that satisfy consition

let passed = scores.filter(s=> s>70);
console.log(passed); // [82,91,73]

// reduce- accumulate values to single value
let total = scores.reduce((sum,s)=> sum+s,0);
console.log(total); //351

//flat - flatten nested arrays
let nested =[[1,2],[3,4],[5,6]];
console.log(nested.falt()); //[1,2,3,4,5,6]