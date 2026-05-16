console.log("score"); // Referenceerror: score is not defined
let score =100;
{
    //---TDZ for "score" starts here
    // console.log(score);// Referenceerror:score is not defined
    //score =50; //Reference error:score is not defined
    // type of score; // Reference error:score is not defined
    // TDZ ends here when the let variable is initialized with same value
       let score= 100; // Declaration reached TDZ ends here 
       console.log(score);// 100 is safe to access here 
}
