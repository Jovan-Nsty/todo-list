// Module for creating the form that makes todo list items / tasks
export function formCreate() {
    const form = document.createElement('form');
    form.id = 'project-form';

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Enter your task..');
    input.setAttribute('id', 'project-input-form');
    input.setAttribute('name', 'task-submit');

    form.appendChild(input);

    return form;
}