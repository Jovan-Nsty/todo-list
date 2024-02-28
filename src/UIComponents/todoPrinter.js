export const printTodoArray = array => {
    for (const todo of array) {
        const getList = document.getElementById('project-todo-list');
        const makeListItem = document.createElement('li');
        makeListItem.setAttribute('class','li-item');
        const makeAnchor = document.createElement('a');

        makeAnchor.textContent = todo.getTodoTitle();
        makeListItem.appendChild(makeAnchor);
        getList.appendChild(makeListItem);
    }
}