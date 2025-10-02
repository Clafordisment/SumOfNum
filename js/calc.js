'use strict'
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

function calculateSum() {
    const sum = parseInt(num1.value) + parseInt(num2.value);
    result.textContent = isNaN(sum) ? 'Ошибка' : sum;
}
num1.addEventListener('input', calculateSum);
num2.addEventListener('input', calculateSum);