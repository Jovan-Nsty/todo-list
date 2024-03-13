import { todo } from "../../todo/createProject";
import { createTodoItem } from "../../todo/todoItemCreate";

// Form submit action
export function formSubmit() {
    const form = document.getElementById('project-input-form');
    const listContainer = document.getElementById('todo-items-list');
    const inputValue = form.value;

    // Creating Todo Project sub-items / tasks
    const todoItem = createTodoItem();
    todoItem.setTitle(inputValue);

    // Adding sub items / tasks to Todo Project array task list
    todo.setTaskListItem(todoItem);
    
    listContainer.appendChild(listPopulate(todoItem));
}

// Function for creating <li> for Todo Project sub items / tasks
function listPopulate(value) {
    const listItem = document.createElement('li');
    listItem.textContent = value.getTitle();
    listItem.classList.add('todo-item');

    return listItem;
}