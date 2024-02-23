export const printTodoArray = array => {
    for (const todo of array) {
        console.log(todo.getTodoTitle());
    }
}