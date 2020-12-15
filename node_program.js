function test(){
    setTimeout(function(){
        console.log("inside test")
        console.log("First Set Timeout");
    }, 3000);

    setTimeout(function(){
        console.log("Second Set Timeout");
    }, 5000);

    setTimeout(function(){
        console.log("Third Set Timeout");
    }, 3000);
}

test();
console.log("Still First Printed");