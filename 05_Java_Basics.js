var a = 10;
console.log(a);
console.log(a); -alt + shit + down - duplicate

/*a is identifier 10 is the value and ;is the operator

var name="manasa";
                 var first Name="manasa";
//camel case 
var first_Name ="manasa"; //snake case
*/

// ============================================
// JAVASCRIPT IDENTIFIER RULES
// ============================================

/*
RULE 1: First Character
- Must be a letter (a-z, A-Z)
- Must be an underscore (_)
- Must be a dollar sign ($)
- Cannot start with a number
*/

let myVar;              // Valid - starts with letter
let _private;           // Valid - starts with underscore
let $special;           // Valid - starts with dollar sign
// let 123invalid;      // Invalid - starts with number

/*
RULE 2: Subsequent Characters
- Can be letters (a-z, A-Z)
- Can be digits (0-9)
- Can be underscores (_)
- Can be dollar signs ($)
- Cannot contain spaces or special characters
*/

let user_name;          // Valid - underscore allowed
let userName;           // Valid - camelCase
let age1;               // Valid - digit allowed
let $price;             // Valid - dollar sign
// let user-name;       // Invalid - hyphen not allowed
// let user name;       // Invalid - space not allowed

/*
RULE 3: Case Sensitivity
- JavaScript identifiers are case-sensitive
- myVar and myvar are different identifiers
*/

let myVar = 5;
let myvar = 10;
console.log(myVar);     // 5
console.log(myvar);     // 10

/*
RULE 4: Reserved Keywords
- Cannot use JavaScript reserved keywords as identifiers
- Examples: var, let, const, function, class, if, else, for, while, etc.
*/

// let class = "Math";  // Invalid - 'class' is reserved
// let function = 5;    // Invalid - 'function' is reserved

/*
RULE 5: Length
- No maximum length limit
- Minimum is 1 character
*/

let x;                  // Valid - single character
let veryLongVariableNameThatDescribeSomething = 100;  // Valid

// ============================================
// NAMING CONVENTIONS
// ============================================

// camelCase - for variables and functions
let firstName = "John";
let lastName = "Doe";
function calculateTotal() { }

// PascalCase - for classes and constructors
class UserProfile { }
function MyConstructor() { }

// UPPER_SNAKE_CASE - for constants
const MAX_LENGTH = 100;
const API_KEY = "abc123";

// snake_case - sometimes used (not recommended)
let user_age = 25;
let user_email = "john@example.com";

// ============================================
// VALID IDENTIFIER EXAMPLES
// ============================================

let name = "Alice";
let age = 25;
let isActive = true;
let _privateVar = "hidden";
let $jquery = true;
let User123 = "valid";
let user_name_age = "valid";

// ============================================
// INVALID IDENTIFIER EXAMPLES
// ============================================

// let 123name;              // Starts with number
// let my-var;               // Contains hyphen
// let my var;               // Contains space
// let my.var;               // Contains period
// let class = 10;           // Reserved keyword
// let function() {}         // Reserved keyword