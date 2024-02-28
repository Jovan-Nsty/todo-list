import './style.css';
import { todosArray } from './todo/todoManager.js';
import { printTodoArray } from './UIComponents/todoPrinter.js';
import { createDefaultTodo } from './todo/defaultProject.js';
import './UIComponents/buttonFormTransform.js';
import './UIComponents/retrieveFormValueAndUpdateDOM.js';

// Creating a default 'personal' todo list on page load
createDefaultTodo();

// Print all available todo projects
printTodoArray(todosArray);