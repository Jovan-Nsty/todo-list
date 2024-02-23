import { createTodo } from './todo/todoCreate.js';
import { addTodoToArray, todosArray } from './todo/todoManager.js';
import { printTodoArray } from './todo/todoPrinter.js';
import { createTodoItem } from './todo/todoItemCreate.js';

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