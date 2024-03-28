// Module for capturing and updating the DOM date display
document.getElementById('todo-list-items').addEventListener('click', event => {
    const eventTarget = event.target;

    if(event.target.classList.contains('today-btn')) {
        const date = new Date();
        const todayDate = date.toDateString();

        printDateToDOM(todayDate, eventTarget);
    }

    if(event.target.classList.contains('tomorrow-btn')) {
        const tomorrowDate = new Date();
        tomorrowDate.setDate(tomorrowDate.getDate() + 1);
        const dateString = tomorrowDate.toDateString();
        
        printDateToDOM(dateString, eventTarget);
    }
})

document.getElementById('todo-list-items').addEventListener('input', event => {
    const eventTarget = event.target;

    if(eventTarget && eventTarget.classList && eventTarget.classList.contains('due-date-input')) {
        const selectedDate = eventTarget.value;

        if(selectedDate) {
            const parsedDate = new Date(selectedDate);
            const formattedDate = parsedDate.toDateString();
            
            printDateToDOM(formattedDate, eventTarget);
        }
    }
})

function printDateToDOM(value, eventTarget) {
    const closestListItem = eventTarget.closest('li');

    if(closestListItem) {
        const dateContainer = closestListItem.querySelector('.date-container > p');

        if(dateContainer) {
            dateContainer.textContent = value;
        }
    }
}