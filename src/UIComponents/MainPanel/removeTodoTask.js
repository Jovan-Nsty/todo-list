import { updateDatasetIndex } from "./listItemCreate";
import { createdTodoItems } from "./formSubmit";
import { createTodo } from '../../todo/todoCreate'; 

document.getElementById('todo-list-items').addEventListener('click', event => {
    if(event.target.classList.contains('todo-list-item-checkbox-btn')) {

        const listItem = event.target.closest('.todo-item');

        if(listItem) {
            // Get the dataset index
            const index = listItem.dataset.index;

            // Create an instance of createTodo
            const todoInstance = createTodo();

            // Call removeTaskListItem on the instance
            todoInstance.removeTaskListItem(index);

            // Remove the todo item from the createdTodoItems array
            createdTodoItems.splice(index, 1);

            // Remove the <li> element from the DOM
            listItem.remove();

            // Update dataset indexes after removal
            updateDatasetIndex();
        }
    }
})