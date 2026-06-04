// Arrow functions(ES6)



const greet = function(name){
    return name;
}


const r1 = greet("manasa");
console.log(r1); // manasa

// arrow function
const greet2 =(name)=>name;
let r2 = greet2("sunny");
console.log(r2); // sunny

// if you want to make a normal function to arrow function 
// you can remove the function,remove the keyword return,remove the curly braces and use =>


    const double = n=>n*2;
    console.log(double(5));//10;

    const printIt = n=>console.log(n);
   printIt("manasa"); //manasa


   function add(a,b){
    return a+b;
   }

   const add2=(a,b)=>console.log(a+b);
   add2(2,3); //5


   function say(){
    console.log("hi");
   }

   const say2=()=>console.log("hi"); // we can write like this also const say2 => "hi";
   say2(); 


   const greet= name=>{
    const message = "hi " + name;
    return message;
   }

