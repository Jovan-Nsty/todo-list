import { loadExpandDownBtn } from '../loadSVG';

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
    topContainer.appendChild(createTextElement(value));
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
    bottomRightContainer.appendChild(createDateSelector());
    bottomRightContainer.appendChild(createPrioritySelector());

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
    const container = document.createElement('div');
    const projectNameContainer = document.createElement('div');
    const dateContainer = document.createElement('div');

    const nameParagraph = document.createElement('p');
    nameParagraph.innerText = title.getTitle();

    const dateParagraph = document.createElement('p');

    projectNameContainer.appendChild(nameParagraph);
    projectNameContainer.classList.add('task-name-title');
    dateContainer.appendChild(dateParagraph);
    dateContainer.classList.add('date-container');

    container.appendChild(projectNameContainer);
    container.appendChild(dateContainer);
    container.classList.add('text-content');

    return container;
}

// Expand button creation for Todo Project sub items / tasks
function expandButtonPopulate() {
    const button = document.createElement('button');
    button.classList.add('expand-btn-container');
    loadExpandDownBtn(button);

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
    // Main container
    const container = document.createElement('div');
    container.classList.add('date-selector');

    // Container for buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('date-btn-container');

    const title = document.createElement('p');
    title.textContent = 'Due date';

    // Today button
    const todayButton = document.createElement('button');
    todayButton.classList.add('today-btn');
    todayButton.textContent = 'Today';

    // Tomorrow button
    const tomorrowButton = document.createElement('button');
    tomorrowButton.classList.add('tomorrow-btn');
    tomorrowButton.textContent = 'Tomorrow';

    // Date picker input
    const dateButton = document.createElement('input');
    dateButton.classList.add('due-date-input');
    dateButton.type = 'date';

    const dateInputLabel = document.createElement('label');
    dateInputLabel.textContent = 'Select date:';
    dateInputLabel.htmlFor = 'due-date-input'

    // Append buttons to the container
    buttonContainer.appendChild(todayButton);
    buttonContainer.appendChild(tomorrowButton);
    buttonContainer.appendChild(dateButton);

    // Append title and button container to the main container
    container.appendChild(createDivForElement(title, 'due-date-title'));
    container.appendChild(buttonContainer);

    return container;
}

// Priority creation
function createPrioritySelector() {
    // Create main container
    const container = document.createElement('div');
    container.classList.add('priority-selector');

    // Create title container
    const titleContainer = document.createElement('div')
    titleContainer.classList.add('priority-title');

    // Create title
    const title = document.createElement('p');
    title.innerText = 'Priority';

    // Create select container
    const selectContainer = document.createElement('div');
    selectContainer.classList.add('select-container');
    
    // Create select element
    const select = document.createElement('select');
    select.classList.add('priority-select-panel');

    // Priority options
    const priorities = ['None', 'Low', 'Medium', 'High'];
    priorities.forEach(priority => {
        const option = document.createElement('option');
        option.value = priority.toLowerCase();
        option.textContent = priority;
        select.appendChild(option);
    });

    titleContainer.appendChild(title);
    selectContainer.appendChild(select);

    container.appendChild(titleContainer);
    container.appendChild(selectContainer);

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