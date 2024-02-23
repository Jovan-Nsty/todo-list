import { createTodo } from './todoCreate.js';
import { addTodoToArray, todosArray } from './todoManager.js';
import { printTodoArray } from './todoPrinter.js';
import { createTodoItem } from './todoItemCreate.js';

const todo = createTodo('TODO');

const todoItem = createTodoItem();
todoItem.setTitle('todo item');
todoItem.setDescription('this is my todo item');
todoItem.setDueDate('feb 22 2024');
todoItem.setPriority('medium');

todo.setTaskListItem(todoItem);

addTodoToArray(todo);

printTodoArray(todosArray);
todo.getTaskList();