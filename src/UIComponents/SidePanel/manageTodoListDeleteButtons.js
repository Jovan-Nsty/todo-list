import { deleteTodoFromArray, todosArray } from "../../todo/todoManager";
import { printTodoArray } from "./todoPrinter";

// Creating individual Todo Project delete button
export function createDelBtn() {
    const todoList = document.querySelectorAll('.li-item');

    for(let i = 1; i < todoList.length; i++) {
        const createBtn = document.createElement('button');
        createBtn.classList.add('del-btn');
        createBtn.textContent = 'x';
        todoList[i].appendChild(createBtn);

        // Updating the Todo Project list
        createBtn.addEventListener('click', () => {
            updateTodoList(i);
        })
    }
}

function updateTodoList(index) {
    deleteTodoFromArray(index);
    printTodoArray(todosArray);
    createDelBtn();
}