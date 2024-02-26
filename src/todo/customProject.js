import { createTodo } from "./todoCreate";
import { addTodoToArray } from "./todoManager";

export function createCustomTodo(value) {
    const todo = createTodo(value);
    addTodoToArray(todo);
}