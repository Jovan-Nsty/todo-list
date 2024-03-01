const button = document.getElementById('todo-add-btn');
const form = document.getElementById('todo-name');

button.addEventListener('click', () => {
    button.style.display = 'none';
    form.style.display = 'block';
})

document.body.addEventListener('click', event => {
    if (event.target !== form && event.target !== button) {
        closeFormOnSubmit();
    }
})

export function closeFormOnSubmit() {
    form.style.display = 'none';
    button.style.display = 'block';
}