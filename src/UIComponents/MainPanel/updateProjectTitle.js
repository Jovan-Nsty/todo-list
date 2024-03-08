export function titleUpdate(title, todoList) {
    function handleClick(event) {
        const clickedListItem = event.target.closest('li.li-item > a');

        if(clickedListItem) {
            title.textContent = clickedListItem.textContent;
        }
    }

    todoList.addEventListener('click', handleClick);
}