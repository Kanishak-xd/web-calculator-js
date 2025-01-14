let addBtn = document.getElementById('addBtn');
let subBtn = document.getElementById('subBtn');
let mulBtn = document.getElementById('mulBtn');
let divBtn = document.getElementById('divBtn');

// ADDITION
addBtn.addEventListener('click', (event)=> {
    event.preventDefault();

    let inp1 = parseFloat(document.getElementById('num1').value);
    let inp2 = parseFloat(document.getElementById('num2').value);
    
    let output = document.getElementById("displayOutput");
    output.textContent = inp1 + inp2;
});

// SUBTRACTION
subBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    
    let inp1 = parseFloat(document.getElementById('num1').value);
    let inp2 = parseFloat(document.getElementById('num2').value);
    
    let output = document.getElementById("displayOutput");
    output.textContent = inp1 - inp2;
});

// MULTIPLICATION
mulBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    
    let inp1 = parseFloat(document.getElementById('num1').value);
    let inp2 = parseFloat(document.getElementById('num2').value);
    
    let output = document.getElementById("displayOutput");
    output.textContent = inp1 * inp2;
});

// DIVISION
divBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    
    let inp1 = parseFloat(document.getElementById('num1').value);
    let inp2 = parseFloat(document.getElementById('num2').value);
    
    let output = document.getElementById("displayOutput");
    output.textContent = inp1 / inp2;
});