import { createTodo } from "./todoCreate";
import { addTodoToArray } from "./todoManager";

export function createTodoProject(value) {
    const todo = createTodo(value);
    addTodoToArray(todo);
}