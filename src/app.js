import { createTodo } from './todo/todoCreate.js';
import { addTodoToArray, todosArray } from './todo/todoManager.js';
import { printTodoArray } from './todo/todoPrinter.js';
import { createTodoItem } from './todo/todoItemCreate.js';
import { createDefaultTodo } from './todo/defaultProject.js';
import { createCustomTodo } from './todo/customProject.js';

// Creating a default 'personal' todo list on page load
createDefaultTodo();

// Creating custom todo projects on page load (beta)
createCustomTodo('custom1');
createCustomTodo('custom2');

// Print all available todo projects
printTodoArray(todosArray);