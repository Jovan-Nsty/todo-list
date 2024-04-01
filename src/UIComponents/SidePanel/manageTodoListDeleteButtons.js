import { deleteTodoFromArray, todosArray } from "../../todo/todoManager";
import { loadDeleteBtnSVG } from "../loadSVG";
import { printTodoArray } from "./todoPrinter";

// Creating individual Todo Project delete button
export function createDelBtn() {
    const todoList = document.querySelectorAll('.li-item');

    for(let i = 1; i < todoList.length; i++) {
        const buttonContainer = document.createElement('div');
        const createBtn = document.createElement('button');
        createBtn.classList.add('del-btn');
        loadDeleteBtnSVG(createBtn);
        buttonContainer.appendChild(createBtn);
        buttonContainer.classList.add('todo-project-delete-btn-container');
        todoList[i].appendChild(buttonContainer);

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