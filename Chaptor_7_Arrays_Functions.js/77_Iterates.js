// Iterate - Go from one to another
 

let tests = ["login", "Checkout","serach"]
 
for(let i=0; i<tests.length; i++){
    console.log(tests[i]);

}

console.log("----");

// for ...of (cleanest for values)
for(tests of tests){
    console.log(tests);
}

console.log("----");
tests.forEach((tests, Index) => { 
    console.log(tests, Index);
});

console.log("---");

let students = ["mansa", "suma", "siri"];
for (let i in students){
    console.log(i,"-->", students[i]); //index= in
}

console.log("----");
for (let [i,test] of tests.entries()){
    console.log(i, test);
}