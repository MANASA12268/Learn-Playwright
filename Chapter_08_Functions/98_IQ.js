let g_x = 10;


// nested scope | blocked scope
function outer(){
    let x= 10;

    function inner(){
        let y = 20;
        console.log(x);


        inner();
        console.log(y);
    }

    }


    test("Example", async (args) => {
    console.log(args.page);
    console.log(args.context);
    console.log(args.browser);
});
