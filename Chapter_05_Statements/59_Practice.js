let statuscode = 200;
if(statuscode>=200 && statuscode<=299){
    console.log("input: success");
} 
else if(statuscode>=300 && statuscode<=399){
    console.log("input: Redirection");
} 
else if(statuscode>=400 && statuscode<=499){
    console.log("input: client error");
} 
else if(statuscode>=500 && statuscode<=599){
    console.log("input: server error");
}

else{
    console.log("input: invalid");
}

// example2

let expected = "Login Successful";
let actual = "Login Successful";
if (expected ===actual){
    console.log("✅Test Passed");

 } else if(expected === "Invalid credentials"){
        console.log("❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials");
    }



// example3
let bugimpactscore= 8;
if (bugimpactscore>=9 && bugimpactscore<=10){
    console.log("Severity: critical");
}
else if(bugimpactscore>=7 && bugimpactscore<=8){
    console.log("Severity: high");
}
else if (bugimpactscore>=4 && bugimpactscore<=6){
    console.log("Severity: medium");
}
else if(bugimpactscore>=1 && bugimpactscore<=3){
    console.log("Severity: low");
}
else{
    console.log("Severity: invalid score");
}

// example4
let testcasepassed = 90;
if (testcasepassed === 100){
    console.log("Green Build");
} 
else if (testcasepassed>=90 && testcasepassed<=99){
    console.log("🟡 Stable — Investigate failures");
}
else if (testcasepassed>=70 && testcasepassed<=89){
    console.log("Unstable");
}
else if (testcasepassed===70){
    console.log("🔴 Broken Build — Block deployment");
}
else{
    console.log("Invalid test case passed value");
}

// example5
let attempts = 3;
if (attempts==0){
    console.log("login successful");
}
 
else if (attempts===2){
    console.log("1 attempt left before lockout");

}
else if (attempts===3){
    console.log("🔒 Account Locked — Contact support");
}
else {
    console.log("Invalid attempts value");
}