import { formCreate } from "./formCreate";
import { formSubmit } from "./formSubmit";

// Function for individual Todo Project
export function updateContent() {
    const content = document.getElementById('todo-list-items');
    const todoList = document.getElementById('project-todo-list');
    
    // On each Todo Project click, form is created and <ul> list is created
    function handleClick(event) {
        const closeButton = event.target.closest('.del-btn');

        if(closeButton) {
            return;
        } else {
            const clickedListItem = event.target.closest('li.li-item');
        
            if(clickedListItem) {
                content.textContent = '';
                content.appendChild(formCreate());
                content.appendChild(listContainer());
            }
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

// Function for creating the <ul> container for Todo Project sub items / tasks
function listContainer() {
    const list = document.createElement('ul');
    list.id = 'todo-items-list';

    return list;
}