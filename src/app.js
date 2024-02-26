import { createTodo } from './todo/todoCreate.js';
import { addTodoToArray, todosArray } from './todo/todoManager.js';
import { printTodoArray } from './todo/todoPrinter.js';
import { createTodoItem } from './todo/todoItemCreate.js';
import { createDefaultTodo } from './todo/defaultProject.js';

// Creating a default 'personal' todo list on page load
createDefaultTodo();

// Print all available todo projects
printTodoArray(todosArray);