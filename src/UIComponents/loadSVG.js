import fileCheck from '../assets/file-check.svg';
import delBtn from '../assets/delete.svg';
import expandDownBtn from '../assets/expand-down.svg';

export function loadSVG() {
    loadHeaderSVG();
}

function loadHeaderSVG() {
    const myIcon = new Image();
    myIcon.src = fileCheck;

    const headerSlot = document.getElementById('title-logo');
    headerSlot.appendChild(myIcon);

    return headerSlot;
}

export function loadDeleteBtnSVG(element) {
    const delIcon = new Image();
    delIcon.src = delBtn;

    element.appendChild(delIcon);
}

export function loadExpandDownBtn(element) {
    const downIcon = new Image();
    downIcon.src = expandDownBtn;
    downIcon.classList.add('todo-list-item-expand-btn');

    element.appendChild(downIcon);
}