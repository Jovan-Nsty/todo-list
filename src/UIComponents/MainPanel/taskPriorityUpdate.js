// Module for changing the todo sub item / task priority status
document.getElementById('todo-list-items').addEventListener('change', event => {
    if(event.target && event.target.matches('.priority-select-panel')) {
        const selectedOption = event.target.value;
        const listItem = event.target.closest('li');
        const headerElement = listItem.querySelector('.todo-item-header');
        const bodyElement = listItem.querySelector('.todo-item-body');

        if(selectedOption === 'none') {
            headerElement.style.borderLeft = '4px solid var(--main-sidepanel-color)';
            bodyElement.style.borderLeft = '4px solid var(--main-sidepanel-color)';
        }
        
        if(selectedOption === 'low') {
            headerElement.style.borderLeft = '4px solid blue';
            bodyElement.style.borderLeft = '4px solid blue';
        }

        if(selectedOption === 'medium') {
            headerElement.style.borderLeft = '4px solid orange';
            bodyElement.style.borderLeft = '4px solid orange';
        }

        if(selectedOption === 'high') {
            headerElement.style.borderLeft = '4px solid red';
            bodyElement.style.borderLeft = '4px solid red';
        }
    }
})