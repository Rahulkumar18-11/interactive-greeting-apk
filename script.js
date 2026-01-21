
const myButton = document.getElementById('myButton');
const inputField = document.getElementById('nameInput');
const displayText = document.getElementById('display');
const form = document.getElementById('myForm');

myButton.addEventListener('mouseover', function () {
    myButton.style.backgroundColor = 'green';
});

myButton.addEventListener('mouseout', function () {
    myButton.style.backgroundColor = 'blue';
});


form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const name = inputField.value;

    if (name === "") {
        alert("Name cannot be empty!");
    } else {
        displayText.innerHTML = "Hello, " + name + "! Welcome 😊";
    }
});
