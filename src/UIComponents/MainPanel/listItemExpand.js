document.getElementById('todo-list-items').addEventListener('click', event => {
    if(event.target.classList.contains('todo-list-item-expand-btn')) {
        const listItem = event.target.closest('.todo-item');
        const expandableContent = listItem.querySelector('.todo-item-body');

        if(expandableContent.style.display === 'none' || expandableContent.style.display === '') {
            expandableContent.style.display = 'flex';
        } else {
            expandableContent.style.display = 'none';
        }
    }
})