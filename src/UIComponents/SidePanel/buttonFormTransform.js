const span = document.querySelector('#todo-add-btn > span');
const button = document.getElementById('todo-add-btn');
const form = document.getElementById('todo-name');

span.addEventListener('click', event => {
    event.stopPropagation();
    button.style.display = 'none';
    form.style.display = 'flex';
})

button.addEventListener('click', () => {
    button.style.display = 'none';
    form.style.display = 'flex';
})

document.body.addEventListener('click', event => {
    if (event.target !== form && event.target !== button) {
        closeFormOnSubmit();
    }
})

export function closeFormOnSubmit() {
    form.style.display = 'none';
    button.style.display = 'flex';
}