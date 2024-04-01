import './style.css';
import { todosArray } from './todo/todoManager.js';
import { printTodoArray } from './UIComponents/SidePanel/todoPrinter.js';
import './UIComponents/SidePanel/buttonFormTransform.js';
import './UIComponents/SidePanel/retrieveFormValueAndUpdateDOM.js';
import './UIComponents/MainPanel/updateMainPanel.js';
import { createTodoProject } from './todo/createProject.js';
import './UIComponents/MainPanel/removeTodoTask.js';
import './UIComponents/MainPanel/listItemExpand.js';
import './UIComponents/MainPanel/taskPriorityUpdate.js';
import './UIComponents/MainPanel/updateDueDate.js';
import './UIComponents/loadSVG.js';
import { loadHeaderSVG } from './UIComponents/loadSVG.js';

// Creating a default 'personal' todo list on page load
createTodoProject('Personal');

// Print all available todo projects
printTodoArray(todosArray);

// Load SVG's for <h1> on page load
loadHeaderSVG()