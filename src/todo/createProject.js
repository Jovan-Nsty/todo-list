import { createTodo } from "./todoCreate";
import { addTodoToArray } from "./todoManager";

export let todo;

export function createTodoProject(value) {
    todo = createTodo(value);
    addTodoToArray(todo);
}