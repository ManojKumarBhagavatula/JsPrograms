const PI = 3.14

let circumference ;

document.getElementById("submit").onclick = function(){
    let radius = document.getElementById('radius').value;
    circumference = 2 * PI * Number(radius);
    document.getElementById("circumference").textContent = `circumference :${circumference}`;
}

