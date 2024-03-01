export const printTodoArray = array => {
    const getList = document.getElementById('project-todo-list');
    getList.textContent = '';

    for (const todo of array) {
        const makeListItem = document.createElement('li');
        const makeAnchor = document.createElement('a');
        makeListItem.classList.add('li-item');

        makeAnchor.textContent = todo.getTodoTitle();
        makeListItem.appendChild(makeAnchor);
        getList.appendChild(makeListItem);
    }
}