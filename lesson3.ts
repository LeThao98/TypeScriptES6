//hoisting
function greetPerson1(name:string){
    if(name === "Chandler"){
        greet = "Hello Chanlder";
    }
    else{
        greet = "Hi there";
    }
    console.log(greet);
    var greet;
}
greetPerson1("Chandler");