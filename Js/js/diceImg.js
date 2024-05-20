

document.getElementById("submit").onclick =   function(){
    let no = document.getElementById('number').value;
    let values = document.getElementById('values');
    let images = document.getElementById('images');

    let value = []
    let imgs = []
    
    for (let i = 1; i <= no;  i++) {
        let val = Math.floor(Math.random() * 6 )+ 1;
        value.push(val);
        imgs.push(`<img src="../images/diceImg/${val}.png"></img>`);
    }

    values.textContent = `dice Values: ${value.join(',  ')}`;
    images.innerHTML = imgs.join('')
  
   
    
}