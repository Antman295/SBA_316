let confirmation = confirm(`Just to confirm, you are 18 or older correct?`);

if(confirmation) {
    alert("You may proceed.");
} else {
    alert("You're too young! Please go back to the main page!");
    window.location.href = "../index.html"
}

const input = document.getElementById('nameInput');
const addName = document.getElementById('addButton');
const removeName = document.getElementById('removeButton');
const nameList = document.getElementById('list');

addName.addEventListener('click', () => {
    const name = input.value;

    if (name) {
       const newName = document.createElement('li');
       newName.textContent = name;
       
       nameList.appendChild(newName);

       input.value = '';
    } else {
        alert("Please enter a name into the text field.");
    }
})

removeName.addEventListener('click', () => {
    const name = input.value;

    if (name) {
        const listOfNames = nameList.querySelectorAll('li');

        listOfNames.forEach((item) => {
            if (item.textContent === name) {
                nameList.removeChild(item);
            }
        })

        input.value = '';
    } else {
        alert("Please enter a name that's on the list to delete it.")
    }
})

