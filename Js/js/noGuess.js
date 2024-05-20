let no = Math.floor(Math.random() *100)+1;
let guess = 0;
let condition = true;
while (condition) {
    let input = window.prompt("ENter a number to guess : ");
    input = Number(input);
    if(isNaN(input)) {
        window.prompt("Please enter a number");
    }
    else{
        guess ++;
        if(input > no){
            window.alert("Too high :| ");
        }
        else if(input < no){
            window.alert("Too low :| ");
        }
        else if(input == no){
            window.alert("HOoo CorreCT !! " + guess);
            condition = false;
        }
        
    }
}