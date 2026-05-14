var a = 10; //global scope 
console.log( a );

// Definition of the function

function print() {
    console.log( "Hello to the function scope" );
    var a = 20; // local scope
    console.log( a );
    if ( true ) {
        var a = 40;
        console.log( a );
    }
    console.log( "f-->", a );
}
console.log( "g-->", a );

print();
