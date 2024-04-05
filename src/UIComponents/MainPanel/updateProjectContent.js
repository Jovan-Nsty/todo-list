import { formCreate } from "./formCreate";
import { formSubmit } from "./formSubmit";
import { removeWelcomeMessage } from './removeWelcomeMsg';

// Function for individual Todo Project to render form and list items (Todo Project sub tasks)
export function updateContent() {
    const content = document.getElementById('todo-list-items');
    const todoList = document.getElementById('project-todo-list');
    
    // On each Todo Project click, form is created and <ul> list is created
    function handleClick(event) {
        const closeButton = event.target.closest('.del-btn');

        // If todo project delete button is clicked: return, else update the main panel content

        if(closeButton) {
            return;
        } else {
            const clickedListItem = event.target.closest('li.li-item');
        
            if(clickedListItem) {
                removeWelcomeMessage()
                content.textContent = '';
                content.appendChild(formCreate());
                content.appendChild(listContainer());
            }
        }
    }

    todoList.addEventListener('click', handleClick);

    // Listener for sending form data and resetting the form field value
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