document.getElementById('todo-list-items').addEventListener('click', event => {
    if(event.target.classList.contains('today-btn')) {
        const date = new Date();
        const todayDate = date.toDateString();

        printDateToDOM(todayDate);
    }
    if(event.target.classList.contains('tomorrow-btn')) {
        const tomorrowDate = new Date();
        tomorrowDate.setDate(tomorrowDate.getDate() + 1);
        const dateString = tomorrowDate.toDateString();
        
        printDateToDOM(dateString);
    }
})

document.getElementById('todo-list-items').addEventListener('input', event => {
    const target = event.target;
    if(target && target.classList && target.classList.contains('due-date-input')) {
        const selectedDate = target.value;
        if(selectedDate) {
            const parsedDate = new Date(selectedDate);
            const formattedDate = parsedDate.toDateString();
            
            printDateToDOM(formattedDate);
        }
    }
})

function printDateToDOM(value) {
    const listItem = document.querySelector('.todo-item-header > .text-content > .date-container > p');
    listItem.textContent = value;
}