let nameNode = document.getElementById('name')

function validateAge() {

let ageNode = document.getElementById('age');
let message = document.getElementsById(`message`);

let age = ageNode.value;
console.log(ageNode.textContent)
if (age < 18) {
    alert("YOUR TOO YOUNG!")
    age.focus();
    message.textContent = `${nameNode.textContent}, your too young!`
} else {
    message.textContent = `${nameNode.textContent}, welcome! Please proceeed to the next page!`
}

}