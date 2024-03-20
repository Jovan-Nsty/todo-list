import { todo } from "../../todo/createProject";
import { createTodoItem } from "../../todo/todoItemCreate";
import { listPopulate, updateDatasetIndex } from "./listItemCreate";

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
    
    // Creating <li> sub items / tasks elements 
    listContainer.appendChild(listPopulate(todoItem));

    updateDatasetIndex();
}