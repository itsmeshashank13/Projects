let billVal = 0;
let peopleVal = 1;
let tipVal = 0.15;
let tipSelected = false; // Flag to track if a tip button is selected

const input = document.getElementById('input');
const button = document.querySelectorAll('.btn');
const people = document.getElementById('people');
const generateBillBtn = document.querySelector('.billBtn');
const tipAmount = document.querySelector('.tipAmount');
const totalAmount = document.querySelector('.totalAmount');
const resetBtn = document.querySelector('.reset');
const error = document.getElementById('error');

input.addEventListener('input', validateBill);
button.forEach(btn => {
  btn.addEventListener('click', handleButtonClick);
});
generateBillBtn.addEventListener('click', generateBill);
resetBtn.addEventListener('click', billReset);

function validateBill() {
  if (input.value.includes(',')) {
    input.value = input.value.replace(',', '.');
  }
  billVal = parseFloat(input.value);
}

function handleButtonClick(event) {
  button.forEach(btn => {
    btn.classList.remove('active');
  });

  event.target.classList.add('active');
  tipSelected = true;
  tipVal = parseFloat(event.target.innerHTML) / 100;
}

function generateBill() {
  if (!tipSelected) {
    tipVal = 0.15; // Set the default tip value if no tip button is selected
  }

  setPeopleVal();
  calculate();
}

function billReset() {
    input.value = '';
    tipSelected = false; 
    button[2].classList.add('active'); 
    people.value = 0;
    billVal = 0; 
    peopleVal = 0; 
    calculate();
  }
  

  function setPeopleVal() {
    const inputValue = people.value.trim();
    if (inputValue === '') {
      peopleVal = 0;
    } else {
      peopleVal = parseFloat(inputValue);
    }
    if (peopleVal <= 0) {
      error.innerHTML = 'Number must be greater than zero';
      setTimeout(function () {
        error.innerHTML = '';
      }, 2000);
    }
  }
  

  function calculate() {
    if (!isNaN(billVal) && !isNaN(peopleVal) && peopleVal >= 1 && billVal >= 0) {
      let tip = billVal * tipVal / peopleVal;
      let total = (billVal + (billVal * tipVal)) / peopleVal;
  
      tipAmount.innerHTML = '&#x20B9;' + tip.toFixed(2);
      totalAmount.innerHTML = '&#x20B9;' + total.toFixed(2);
    } else {
      tipAmount.innerHTML = '&#x20B9; 0.00';
      totalAmount.innerHTML = '&#x20B9; 0.00';
    }
  }
  
  