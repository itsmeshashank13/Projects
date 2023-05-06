// getting the number
const counter = document.getElementById ('counter');
// getting the increment button
const increase = document.getElementById ('increase');
// getting the reset button
const reset = document.getElementById ('reset');
// getting the decrement button
const decrease = document.getElementById ('decrease');

// function for adding +1 to 0
function plus () {
    counter.innerText ++;
}
// adding the event for click +1
increase.addEventListener("click", plus);

// function for resetting the value to 0
function zero () {
    counter.innerText = 0;
}
reset.addEventListener("click", zero);

// function for decreasing the value by 1 and ensuring that the value doesn't go into minus
function minus () {
    if (counter.innerText > 0) {
    counter.innerText = Number(counter.innerText) - 1 ;
}}
// adding the event for click -1
decrease.addEventListener("click", minus);