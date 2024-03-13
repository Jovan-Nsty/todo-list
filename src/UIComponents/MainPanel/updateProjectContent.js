import { formCreate } from "./formCreate";
import { formSubmit } from "./formSubmit";

export function updateContent() {
    const content = document.getElementById('todo-list-items');
    const todoList = document.getElementById('project-todo-list');
    
    function handleClick(event) {
        const clickedListItem = event.target.closest('li.li-item > a');
        
        if(clickedListItem) {
            content.textContent = '';
            content.appendChild(formCreate());
            content.appendChild(listContainer());
        }
    }

    todoList.addEventListener('click', handleClick);

    content.addEventListener('submit', event => {
        if(event.target.id === 'project-form') {
            event.preventDefault();
            formSubmit();
            document.getElementById('project-input-form').value = '';
        }
    })
}

function listContainer() {
    const list = document.createElement('ul');
    list.id = 'todo-items-list';

    return list;
}