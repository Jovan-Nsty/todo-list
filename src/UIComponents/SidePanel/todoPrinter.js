// Module for DOM manipulation & printing todo project list
export const printTodoArray = array => {
    const getList = document.getElementById('project-todo-list');
    getList.textContent = '';

    for (const todo of array) {
        const titleContainer = document.createElement('div');
        const makeListItem = document.createElement('li');
        const makeAnchor = document.createElement('a');

        titleContainer.appendChild(makeAnchor);
        titleContainer.classList.add('todo-project-name');

        makeListItem.classList.add('li-item');
        makeAnchor.textContent = todo.getTodoTitle();
        makeListItem.appendChild(titleContainer);
        getList.appendChild(makeListItem);
    }
}