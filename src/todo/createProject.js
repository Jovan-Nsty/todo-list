import { createTodo } from "./todoCreate";
import { addTodoToArray } from "./todoManager";

// Module for creating todo projects

export let todo;

export function createTodoProject(value) {
    todo = createTodo(value);
    addTodoToArray(todo);
}