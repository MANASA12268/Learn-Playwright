var a = 30;//Global scope


console.log( a );

function functionscope() {
    console.log( "welcome to the palywright learning" );
    var a = 20; // local scope
    console.log( a );
    if ( true ) {
        var a = 80;
        console.log( a );
    }
}

functionscope();
