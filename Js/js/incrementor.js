let counter = 0;
document.getElementById("increment").onclick = function(){
    document.getElementById("display").textContent = ++counter;
}
document.getElementById("decrement").onclick = function(){
    document.getElementById("display").textContent = --counter;
}
document.getElementById("reset").onclick = function(){
    counter = 0;
    document.getElementById("display").textContent = counter;
}