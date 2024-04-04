export function titleUpdate() {
    const title = document.querySelector('h2');
    const todoList = document.getElementById('project-todo-list');

    function handleClick(event) {
        const closeButton = event.target.closest('.del-btn');

        // If todo project delete button is clicked: return, else update main panel title content

        if(closeButton) {
            return;
        } else {
            const clickedListItem = event.target.closest('li.li-item');

            if(clickedListItem) {
                title.textContent = clickedListItem.textContent;
            }
        }
    }

    todoList.addEventListener('click', handleClick);
}