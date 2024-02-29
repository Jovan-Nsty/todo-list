export function createDelBtn() {
    const todoList = document.querySelectorAll('.li-item');

    for(let i = 1; i < todoList.length; i++) {
        const createBtn = document.createElement('button');
        createBtn.classList.add('del-btn');
        createBtn.textContent = 'x';
        todoList[i].dataset.number = i;
        todoList[i].appendChild(createBtn);
    }
}