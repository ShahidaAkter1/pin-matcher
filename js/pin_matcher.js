
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // console.log('pin not 3 digit found', pin);
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random() *10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    // console.log(pin);

    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
    // console.log("button click");
    const number = event.target.innerText;
    const typeNumberField= document.getElementById('type-numbers');
    const previousNumber=typeNumberField.value;
    if(isNaN(number)){
        if(number ==='C'){
        typeNumberField.value='';
    }
    else if(number === '<'){
        const digits = previousNumber.split('');
        digits.pop();
        const remainingDigits = digits.join('');
        typeNumberField.value = remainingDigits;
    }
}
    else{
        
       
        const newTypeNumber = previousNumber + number;
        typeNumberField.value = newTypeNumber;
    }
    

})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const current = displayPinField.value ;
    displayPinField.value='';

    const typeNumberField = document.getElementById('type-numbers');
    const typeNumber = typeNumberField.value;
    typeNumberField.value='';
    
    const pinSuccessMassage=document.getElementById('pin-sucess');
    const pinFailMassage=document.getElementById('pin-fail');

    if(typeNumber === current){
    
    pinSuccessMassage.style.display='block';
    pinFailMassage.style.display='none';
    }
    else{
    
  pinFailMassage.style.display='block';
  pinSuccessMassage.style.display='none';
}

})