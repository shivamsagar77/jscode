function outter(){
    let num = 0;

    return function inner(){
        num++;
        console.log(num);
    }
}
 outter()();
