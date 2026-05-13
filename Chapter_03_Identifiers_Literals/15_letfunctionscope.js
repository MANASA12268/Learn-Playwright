let a = 10; //global scope 
console.log( a );

// Definatio of the function

function print() {
    console.log( "Hello to the function scope" );
    let a = 20; // local scope
    console.log( a );
    if ( true ) {
        let a = 40;
        console.log( a );
    }
    console.log( "f-->", a );
}
console.log( "g-->", a );

print();
