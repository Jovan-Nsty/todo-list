import { createTodo } from "./todoCreate";
import { addTodoToArray } from "./todoManager";

export function createDefaultTodo() {
    const todo = createTodo('Personal');
    addTodoToArray(todo);
}