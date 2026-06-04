if ("hello") console.log("string is truthy"); // "hello" = truthy
if (42) console.log("number is truthy"); 
if({}) console.log("empty object is truthy");
if([]) console.log("empty array is also truthy");

if("") console.log("wont execute");
if (null) console.log("it wont print");
if (undefined)console.log("it wont print");
if (NaN) console.log("wont execute");
if (0)  console.log("won't print");

let name= undefined
if (name){
    console.log(undefined)
}else{
    console.log("bye")
}