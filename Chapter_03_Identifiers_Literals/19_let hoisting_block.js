
let a =true;
if (true){
    // The scope of TDZ starts here
    console.log(a); // Reference error(Not global)
    let a = true; // TDZ ends here
    console.log(a);//block
}
console.log(a);