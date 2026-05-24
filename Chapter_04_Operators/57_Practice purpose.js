let a= 20, b=30;
let maximumnumber = a>b ? a:b
console.log(maximumnumber)

let a= 20, b=20,c=30;
let maximumnumber = a>b? (a>c?a:c):(b>c? b:c);
console.log(maximumnumber)

let envinorment = "staging";
let baseurl= envinorment==="prod"? "https://api.example.com" : "https://staging-api.example.com";
console.log(baseurl);

let num = -5;
let result = num>0? "positive":"negative";
console.log(result);

leapyear=2024;
let year = (leapyear%4===0 && leapyear%100!=0) || (leapyear%400==0);
console.log(year);

let mobile = "samsung";

if (mobile!="samsung"){
    console.log("mobile is iphone")
}
else{
    console.log("mobile is samsung")
}


    let number= -5
   if (number>0){
    console.log("Negative")
   }else if(number<0){
    console.log("Positive")
   }
   
   else{
    console.log("zero")

   }





   let a= 10,b=50,c=30;
   if(a>b){
    console.log(a)
   }
   else if (c>a){
    console.log(c)
   }
    else {
        console.log(b)
    }

   let username ="admin"
   let password = "1234"
   if (username===password){
    console.log("login successfull")
   }
   else{
    console.log("invalid credentials")
   }



   let env = "staging"
   if (env="staging"){
    console.log("staging Url")
   }




// Traingle practice 
   let a= 5, b=5,c=5;
    if(a===b && b===c){
        console.log("equilateral traingle")
    }
    else if (a===b || b===c || c===a){
     console.log("isoceles traingle")
    }
    else {
        console.log("Scalane Traingle")
    }
        

    for (i=1;i<=100;i++){
        if (i%3==0 && i%5==0){
          console.log("FizzBuzz")
        }

        else if (i%3==0){
            console.log("Fizz")
        }

        else if (i%5==0){
            console.log("Buzz")
        } 
        else {
        console.log (i)
    }
}

    
    
    


    



   