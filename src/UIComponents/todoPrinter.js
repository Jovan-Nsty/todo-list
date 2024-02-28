export const printTodoArray = array => {
    for (const todo of array) {
        const getList = document.getElementById('project-list');
        const makeListItem = document.createElement('li');
        const makeAnchor = document.createElement('a');

        makeAnchor.textContent = todo.getTodoTitle();
        makeListItem.appendChild(makeAnchor);
        getList.appendChild(makeListItem);
    }
}