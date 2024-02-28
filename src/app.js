import './style.css';
import { addTodoToArray, todosArray } from './todo/todoManager.js';
import { printTodoArray } from './UIComponents/todoPrinter.js';
import { createDefaultTodo } from './todo/defaultProject.js';
import { createCustomTodo } from './todo/customProject.js';
import './UIComponents/buttonFormTransform.js';

// Creating a default 'personal' todo list on page load
createDefaultTodo();

// Creating custom todo projects on page load (beta)
createCustomTodo('custom1');
createCustomTodo('custom2');

// Print all available todo projects
printTodoArray(todosArray);