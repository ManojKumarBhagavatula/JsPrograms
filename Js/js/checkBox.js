let subscribe = document.getElementById('subscribe');
let visa = document.getElementById('visa');
let paypal = document.getElementById('paypal');
let phonepay = document.getElementById('phonepay');
let submit = document.getElementById('submit');
let display1 = document.getElementById('display1');
let display2 = document.getElementById('display2');

submit.onclick = function(){
    if (subscribe.checked){
        display1.textContent = 'You have subscribed';        
    }
    else{
        display1.textContent = 'You are not subscribed';
    }
    if(visa.checked){
        display2.textContent = 'You have used Visa';
    }
    else if(paypal.checked){
        display2.textContent = 'You have used PayPal';
    }
    else if(phonepay.checked){
        display2.textContent = 'You have used PhonePay';
    }
    else{
        display2.textContent = 'You have to use a payment method';
    }
}
