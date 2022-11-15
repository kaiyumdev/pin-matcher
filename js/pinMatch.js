function getPin() {
    const randomNumber = Math.round(Math.random() * 10000);
    const pinString = randomNumber + '';
    if(pinString.length == 4){
        return randomNumber;
    }else{
        return getPin();
    }
}

function getPinGenerate(){
    const randomNumber = getPin();
    console.log(randomNumber);
    const inputField = document.getElementById('input-field');
    const inputNumber = inputField.value;
    inputField.value = randomNumber;
}

document.getElementById('key-pad').addEventListener('click', function(e){
    const keyNumber = e.target.innerText;
    const keyInput = document.getElementById('key-pad-input');
    if(isNaN(keyNumber)){
        if(keyNumber == 'C'){
            keyInput.value = '';
        }
    }else{
        console.log(keyNumber);
        const previousKeyInputNumber = keyInput.value;
        const newKeyInputNumber = previousKeyInputNumber + keyNumber;
        keyInput.value = newKeyInputNumber;
    }
})

function getVerify(){
    const randomInputNumber = document.getElementById('input-field').value;
    const keyInputNumber = document.getElementById('key-pad-input').value;
    if(randomInputNumber == keyInputNumber){
        const success = document.getElementById('success').style.display = 'block';
        const fail = document.getElementById('fail').style.display = 'none';
    }else{
        const fail = document.getElementById('fail').style.display = 'block';
        const success = document.getElementById('success').style.display = 'none';
    }
}