import { titleUpdate } from './updateProjectTitle';

document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h2');
    const todoList = document.getElementById('project-todo-list');
    
    titleUpdate(title, todoList);
    updateProjectContent();
})

function updateProjectContent() {
    const getMainContent = document.getElementById('todo-list-items');
    const createInput = document.createElement('form');

    getMainContent.appendChild(createInput);
}