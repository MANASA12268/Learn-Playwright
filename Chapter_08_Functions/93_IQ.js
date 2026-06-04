function runtest(name,status,duration){
    return `${name} : ${status} (${duration}ms)`;
}

    const r =runtest("login","pass", 320);
    console.log(r);