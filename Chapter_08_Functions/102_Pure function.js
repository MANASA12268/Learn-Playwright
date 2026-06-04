// pure functions
// pure functions always returns the same output for the same input and no side effects
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));


function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(getFullName("Ram", "Kumar"));

// impure functions
let tax = 10;

function calculatePrice(price) {
    return price + tax;
}

console.log(calculatePrice(100));
