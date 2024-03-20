// Function for creating <li> for Todo Project sub items / tasks 
export function listPopulate(value) {
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    listItem.appendChild(createDivForElement(checkButtonPopulate()));
    listItem.appendChild(createDivForElement(createTextElement(value)))
    listItem.appendChild(createDivForElement(expandButtonPopulate()));
    
    return listItem;
}

// Checkbox button creation for Todo Project sub items / tasks toggle 
function checkButtonPopulate() {
    const button = document.createElement('input');
    button.setAttribute('type','checkbox');
    button.setAttribute('name', 'delete');
    button.classList.add('todo-list-item-checkbox-btn');

    return button;
}

// Todo Project sub item / task title text content
function createTextElement(title) {
    const paragraph = document.createElement('p');
    paragraph.innerText = title.getTitle();

    return paragraph;
}

// Expand button creation for Todo Project sub items / tasks
function expandButtonPopulate() {
    const button = document.createElement('button');
    button.classList.add('todo-list-item-expand-btn');
    button.textContent = '+';

    return button;
}

// Function to wrap <li> elements in <div>'s
function createDivForElement(element) {
    const div = document.createElement('div');
    div.appendChild(element);
    
    return div;
}

// Function to add indexes to <li> sub item / task elements
export function updateDatasetIndex() {
    const listItems = document.querySelectorAll('.todo-item');
    listItems.forEach((item, index) => {
        item.dataset.index = index++;
    })
}