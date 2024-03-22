// Function for creating <li> for Todo Project sub items / tasks 
export function listPopulate(value) {
    // Create <li>
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    // Create <li> top 'header' <div> container with basic project info
    const topContainer = document.createElement('div');
    topContainer.classList.add('todo-item-header');

    // Append 'basic info' to the top todo item task container
    topContainer.appendChild(createDivForElement(checkButtonPopulate(),'check-btn'));
    topContainer.appendChild(createDivForElement(createTextElement(value),'text-content'))
    topContainer.appendChild(createDivForElement(expandButtonPopulate(),'expand-btn'));

    // Create <li> bottom 'body' <div> container with additional project info
    const bottomContainer = document.createElement('div');
    bottomContainer.classList.add('todo-item-body');

    // Create <div>'s for bottom 'body' <div> container
    const bottomLeftContainer = document.createElement('div');
    bottomLeftContainer.classList.add('todo-item-body-left');
    bottomLeftContainer.appendChild(createDivForElement(createNotesArea(),'notes-area'));

    const bottomRightContainer = document.createElement('div');
    bottomRightContainer.classList.add('todo-item-body-right');
    bottomRightContainer.appendChild(createDivForElement(createDateSelector(),'date-selector'));
    bottomRightContainer.appendChild(createDivForElement(createPrioritySelector(),'priority-selector'));

    // Append <div>'s to the bottom todo item task <div> container 
    bottomContainer.appendChild(bottomLeftContainer);
    bottomContainer.appendChild(bottomRightContainer);

    // Append top and bottom <div>'s to the parent <li> container
    listItem.appendChild(topContainer);
    listItem.appendChild(bottomContainer);
    
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

// Notes text area creation
function createNotesArea() {
    const textArea = document.createElement('textarea');
    textArea.setAttribute('rows', '4');
    textArea.setAttribute('cols', '50');
    textArea.setAttribute('placeholder', 'Enter your notes here..');
    textArea.classList.add('notes-area');

    return textArea;
}

// Due Date creation
function createDateSelector() {
    // Button container
    const container = document.createElement('div');
    container.classList.add('date-selector');

    // Today button
    const todayButton = document.createElement('button');
    todayButton.textContent = 'Today';

    // Tomorrow button
    const tomorrowButton = document.createElement('button');
    tomorrowButton.textContent = 'Tomorrow';

    // Date picker input
    const dateButton = document.createElement('button');
    dateButton.textContent = 'Set date';

    // Append buttons to the container
    container.appendChild(todayButton);
    container.appendChild(tomorrowButton);
    container.appendChild(dateButton);

    return container;
}

// Priority creation
function createPrioritySelector() {
    // Create container div
    const container = document.createElement('div');
    container.classList.add('priority-selector');

    // Create select element
    const select = document.createElement('select');

    // Priority options
    const priorities = ['Low', 'Medium', 'High'];
    priorities.forEach(priority => {
        const option = document.createElement('option');
        option.value = priority.toLowerCase();
        option.textContent = priority;
        select.appendChild(option);
    });

    container.appendChild(select);

    return container;
}

// Function to wrap <li> elements in <div>'s
function createDivForElement(element, className) {
    const div = document.createElement('div');
    div.classList.add(className);
    div.appendChild(element);
    
    return div;
}

// Function to add indexes to <li> sub item / task elements
export function updateDatasetIndex() {
    const listItems = document.querySelectorAll('.todo-item');
    listItems.forEach((item, index) => {
        item.dataset.index = index;
    })
}