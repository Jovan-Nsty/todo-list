import { createCustomTodo } from "../todo/customProject";
import { todosArray } from "../todo/todoManager";
import { closeFormOnSubmit } from "./buttonFormTransform";
import { createDelBtn } from "./createDeleteButtons";
import { printTodoArray } from "./todoPrinter";

const form = document.getElementById('todo-form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const inputValue = document.getElementById('todo-name').value;
    createCustomTodo(inputValue);
    printTodoArray(todosArray);

    createDelBtn();

    document.getElementById("todo-name").value = "";
    closeFormOnSubmit();
});