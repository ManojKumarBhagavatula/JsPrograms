let randomNumber1;
let randomNumber2;
let randomNumber3;
document.getElementById("submit").onclick = function(){
    randomNumber1 = Math.floor(Math.random() * 6 + 1  );
    randomNumber2 = Math.floor(Math.random() * 6 + 1 );
    randomNumber3 = Math.floor(Math.random() * 6 + 1 );
    document.getElementById("display1").textContent = randomNumber1;
    document.getElementById("display2").textContent = randomNumber2;
    document.getElementById("display3").textContent = randomNumber3;
}

