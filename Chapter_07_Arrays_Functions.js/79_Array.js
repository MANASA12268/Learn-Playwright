let fruits = ["apple", "banana", "cherry"];
fruits.sort();
console.log(fruits);

let numbers =[8,1,7,4];
numbers.sort();
console.log(numbers); 

let nums = [8,11,13,9]
nums.sort();
console.log(nums); //lexical sorting



//natural sorting
nums.sort((a,b)=> a-b); // acending order
console.log(nums);

nums.sort((a,b) =>b-a); // decending order
console.log(nums);