export function updateContent() {
    const content = document.getElementById('todo-list-items');
    const todoList = document.getElementById('project-todo-list');

    function handleClick(event) {
        const clickedListItem = event.target.closest('li.li-item > a');
        
        if(clickedListItem) {
            populateProjectElements(content);
        }
    }

    todoList.addEventListener('click', handleClick);
}

function populateProjectElements(content) {
    content.textContent = '';

    const form = document.createElement('form');
    form.id = 'project-form';

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Enter your task..');

    form.appendChild(input);
    content.appendChild(form);
}