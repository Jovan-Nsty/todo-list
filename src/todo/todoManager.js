export let todosArray = [];

export const addTodoToArray = obj => {
    todosArray.push(obj);
}

export const deleteTodoFromArray = index => {
    todosArray.splice(index, 1);
}