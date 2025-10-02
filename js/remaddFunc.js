'use strict'
const elements = {
    addTerm: document.getElementById('add-term'),
    removeTerm: document.getElementById('remove-term'),
    dynamicInputs: document.getElementById('dynamic-inputs'),
    num1: document.getElementById('num1'),
    num2: document.getElementById('num2'),
    result: document.getElementById('result')
};

const updateCalculation = () => {
    const baseSum = [elements.num1, elements.num2]
        .reduce((sum, el) => sum + (parseInt(el.value) || 0), 0);

    const dynamicSum = Array.from(elements.dynamicInputs.querySelectorAll('input'))
        .reduce((sum, input) => sum + (parseInt(input.value) || 0), 0);

    elements.result.textContent = baseSum + dynamicSum;
};

const addInputField = () => {
    const row = document.createElement('div');
    row.className = 'dynamic-row';
    row.innerHTML = `
        <button class="remove-btn" onclick="this.parentElement.remove(); updateCalculation()">
            <i class="fas fa-times"></i>
        </button>
        <input type="number" class="input-field" value="0">
        <span class="operator">+</span>
    `;
    row.querySelector('input').addEventListener('input', updateCalculation);
    elements.dynamicInputs.appendChild(row);
    updateCalculation();
};

const removeInputField = () => {
    elements.dynamicInputs.lastElementChild?.remove();
    updateCalculation();
};

// Инициализация
elements.addTerm.addEventListener('click', addInputField);
elements.removeTerm.addEventListener('click', removeInputField);
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', updateCalculation);
});
updateCalculation();