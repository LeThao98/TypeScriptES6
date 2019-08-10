//spread operator

let displayColors = function(message:string,...colors:string[]) {
    for(let i in colors){
        console.log(colors[i])
    }
};

let message = "Hi";
let colors = ['Red','Green','Blue'];  
displayColors(message,...colors);