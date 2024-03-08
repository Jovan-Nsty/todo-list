import { formCreate } from "./formCreate";

export function updateContent() {
    const content = document.getElementById('todo-list-items');
    const todoList = document.getElementById('project-todo-list');

    function handleClick(event) {
        const clickedListItem = event.target.closest('li.li-item > a');
        
        if(clickedListItem) {
            content.textContent = '';
            content.appendChild(formCreate());
        }
    }

    todoList.addEventListener('click', handleClick);
}