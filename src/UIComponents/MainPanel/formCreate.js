export function formCreate() {
    const form = document.createElement('form');
    form.id = 'project-form';

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Enter your task..');
    input.id = 'project-input-form';

    form.appendChild(input);

    return form;
}