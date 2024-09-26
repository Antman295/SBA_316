let form = document.getElementById('ageValidation');
let nameNode = document.getElementById('name');
let ageNode = document.getElementById('age');

// Event Listener to submit form and run function to validate age
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateAge();
});

// Function to validate user's age
function validateAge() {

let message = document.getElementById(`message`);

let age = ageNode.value;

// Checking if the user is too young or too old
if (age < 18) {
    ageNode.focus(); // Will focus on the age text field if the user is too young
    message.textContent = `${nameNode.value}, you're too young! You must be 18 or older!`
} else if (age > 100) {
    ageNode.focus(); // Will focus on the age text field if the user is too old
    message.textContent = `${nameNode.value}, congrats on being over 100, but you're too old!`
} else {
    message.textContent = `${nameNode.value}, welcome! Please proceed to the next page!`
}

}

