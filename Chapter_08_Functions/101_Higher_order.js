// Higher - order functions
// A function thats takes a function as argument or returns a function.

function runWithLoggin(){
    let result = testFn();
    return result;
}

function logintest(){
return "pass";
}

function logintestfailed(){
    return "fail";
}

runWithLoggin(logintest, "login test");
runWithLoggin(logintestfailed, "Dashboard load failed");
