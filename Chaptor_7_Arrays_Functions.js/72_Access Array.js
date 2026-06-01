// Accessing & modifying

let status = ["pass", "Fail", "skip"];
console.log(status[0]);
console.log(status[1]); // we can access it in this way

console.log(status.at(-1));
console.log(status.at(-2));
console.log(status.at(-3));
console.log(status.at(-4));

//MOdify
status[1] = "blocked";
console.log(status);

