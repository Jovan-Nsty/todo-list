import { todo } from "../../todo/createProject";
import { createTodoItem } from "../../todo/todoItemCreate";

export function formSubmit() {
    const form = document.getElementById('project-input-form');
    const listContainer = document.getElementById('todo-items-list');
    const inputValue = form.value;

    const todoItem = createTodoItem();
    todoItem.setTitle(inputValue);

    todo.setTaskListItem(todoItem);
    
    listContainer.appendChild(listPopulate(todoItem));
}

function listPopulate(value) {
    const listItem = document.createElement('li');
    listItem.textContent = value.getTitle();
    listItem.classList.add('todo-item');

    return listItem;
}