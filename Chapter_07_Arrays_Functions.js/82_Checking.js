//checking Arrays

let result = Array.isArray([1,2,3]);
console.log(result);

let name = Array.isArray("hello");
console.log(name);

// every&some
[80,90,100].every(num => num>50); // true
[60,40,50].every(num=>num>50) //false

//Playwright API
[200,201,203].some(status => status>200); 

// some() returns true if at least one element satisfies the condition, otherwise false

[200,201,203].some(status => status===200); // true


// arrow : s => s>=70