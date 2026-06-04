function retry (TestName, Maxtries=3, Delay=1000){
    console.log(`Retrying ${TestName} up to ${Maxtries} times, ${Delay}ms apart`);
}

retry("logintest");
retry("registrationpage",5, 2000);