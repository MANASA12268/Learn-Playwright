console.log(0=="");
console.log(0 == "0");
console.log(""=="0"); // transitivity broken 

console.log(false==0);
console.log(null==0);
console.log(null==undefined);
console.log(null===undefined); // null and undefined are different types but they are loosely equal