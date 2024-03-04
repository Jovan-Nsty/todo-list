import { createCustomTodo } from "../../todo/customProject";
import { todosArray } from "../../todo/todoManager";
import { closeFormOnSubmit } from "./buttonFormTransform";
import { createDelBtn } from "./manageTodoListDeleteButtons";
import { printTodoArray } from "./todoPrinter";

const form = document.getElementById('todo-form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const inputValue = document.getElementById('todo-name').value;
    createCustomTodo(inputValue);
    printTodoArray(todosArray);
    document.getElementById("todo-name").value = "";
    closeFormOnSubmit();

    createDelBtn();
});