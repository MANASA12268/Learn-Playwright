let results =["pass", "Fail", "pass","error","fail"];

/// indexof - returns first index,or -1 if not found
results.indexof("fail")
results.indexof("skip")

// lastIndexOf - searches from the end
results.lastIndexof("fail");

// includes-return boolean
results.includes("error"); // true
results.includes("skip"); // false

// find - returns first matching element
let num = [10,25,30,45];
num.find(x=> x>20 ); // 25,30,45

//find index
nums.findIndex(n=> n>20); //1,2,3

nums.findlast( n=> n>20); //45
nums.findLastIndex(n=> n>20); //3