function receivesAFunction(sendsAFunction) {
    sendsAFunction();
}
function returnsANamedFunction() {
    return function name(){
        console.log('hi');
    }
}
function returnsAnAnonymousFunction() {
    return name => console.log("hi");
}