let form = document.getElementById('ageValidation');
let nameNode = document.getElementById('name');
let ageNode = document.getElementById('age');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateAge();
});

function validateAge() {

let message = document.getElementById(`message`);

let age = ageNode.value;
console.log(ageNode.value)
if (age < 18) {
    ageNode.focus();
    message.textContent = `${nameNode.value}, you're too young! You must be 18 or older!`
} else if (age > 100) {
    message.textContent = `${nameNode.value}, congrats on being over 100, but you're too old!`
} else {
    message.textContent = `${nameNode.value}, welcome! Please proceed to the next page!`
    ageNode.focus();
}

}
