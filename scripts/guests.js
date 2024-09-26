// Quick confirmation to see if the user is indeed old enough
let confirmation = confirm(`Just to confirm, you are 18 or older correct?`);

if(confirmation) {
    alert("You may proceed.");
} else {
    alert("You're too young! Please go back to the main page!");
    // Will take user back to the main page if they answer "cancel" to the confirmation alert and clicks OK when prompted
    window.location.href = "../index.html"
}

const input = document.getElementById('nameInput');
const addName = document.getElementById('addButton');
const removeName = document.getElementById('removeButton');
const removeFirst = document.getElementById('removeFirstItem');
const removeLast = document.getElementById('removeLastItem');
const nameList = document.getElementById('list');

// Event Listener to add name to the list
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

// Event Listener to remove name off the list
removeName.addEventListener('click', () => {
    const name = input.value;

    if (name) {
        const listOfNames = nameList.querySelectorAll('li');

        // Iterating over the collection of names the user puts in the guest list
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

// Event Listener to remove first name off the list
removeFirst.addEventListener('click', () => {
    if (nameList.hasChildNodes()) {
    nameList.removeChild(list.firstChild);
    } else {
        alert("The list is empty!")
    }
})

// Event Listener to remove last name off the list
removeLast.addEventListener('click', () => {
    if (nameList.hasChildNodes()) {
    nameList.removeChild(list.lastChild);
    } else {
        alert("The list is empty!")
    }
})
