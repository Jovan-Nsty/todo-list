export let todosArray = [];

export const addTodoToArray = obj => {
    todosArray.unshift(obj);
}