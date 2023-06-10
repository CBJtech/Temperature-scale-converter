const firstStep = document.getElementById('input');
const centigradeValue = document.getElementById('centigrade');
const fahrenheitValue = document.getElementById('fahreneit');

function convert(){
    centigradeValue.value = firstStep.value;
    fahrenheitValue.value = firstStep.value * 9/5 +32;
    // Making sure something is inside the firstStep
    if (firstStep.value) {
        
    } else {
        alert('Please enter a number')
    }
}