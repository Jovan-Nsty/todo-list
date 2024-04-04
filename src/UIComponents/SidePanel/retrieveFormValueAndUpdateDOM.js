import { createTodoProject } from "../../todo/createProject";
import { todosArray } from "../../todo/todoManager";
import { closeFormOnSubmit } from "./buttonFormTransform";
import { createDelBtn } from "./manageTodoListDeleteButtons";
import { printTodoArray } from "./todoPrinter";

const form = document.getElementById('todo-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    // Grabbing the form input value
    const inputValue = document.getElementById('todo-name').value;
    // Creating Todo Project with the form input value
    createTodoProject(inputValue);
    // Printing / Updating the Todo Project list to DOM
    printTodoArray(todosArray);
    // Reseting the form input value
    document.getElementById("todo-name").value = "";
    // Closing form on submit
    closeFormOnSubmit();
    // Creating delete buttons for each Todo Project
    createDelBtn();
});