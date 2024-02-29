export function createDelBtn() {
    const itemList = document.querySelectorAll('.li-item');

    for(let i = 1; i < itemList.length; i++) {
        const createBtn = document.createElement('button');
        createBtn.classList.add('del-btn');
        createBtn.textContent = 'x';
        itemList[i].dataset.number = i;
        itemList[i].appendChild(createBtn);
    }
}