let celcius = document.getElementById('celcius');
let fahrenheit = document.getElementById('fahrenheit');
let submit = document.getElementById('submit');
let display = document.getElementById('display');
let input = document.getElementById('input');

submit.onclick = function(){
    let inputValue = parseFloat(input.value);
    if(isNaN(inputValue)){
        display.textContent = 'Please enter a valid number.';
        return;
    }

    if(celcius.checked){
        display.textContent = (5/9) * (inputValue - 32)+' C';
    }
    else if(fahrenheit.checked){
        display.textContent = (9/5) * inputValue + 32+' F';
    }
    else{
        display.textContent ='U have to check any box :|'
    }

};