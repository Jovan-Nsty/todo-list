import fileCheck from '../assets/file-check.svg';
import delBtn from '../assets/delete.svg';
import expandDownBtn from '../assets/expand-down.svg';
import expandUpBtn from '../assets/expand-up.svg';

export function loadSVG() {
    loadHeaderSVG();
}

// Function for loading the main SVG on <h1>
function loadHeaderSVG() {
    const myIcon = new Image();
    myIcon.src = fileCheck;

    const headerSlot = document.getElementById('title-logo');
    headerSlot.appendChild(myIcon);

    return headerSlot;
}

// Function for loading <li> Todo Projecs delete button SVG
export function loadDeleteBtnSVG(element) {
    const delIcon = new Image();
    delIcon.src = delBtn;

    element.appendChild(delIcon);
}

// Function for loading the Todo Project task items button expand SVG
export function loadExpandDownBtn(element) {
    const downIcon = new Image();
    downIcon.src = expandDownBtn;
    downIcon.classList.add('todo-list-item-expand-btn');

    const upIcon = new Image();
    upIcon.src = expandUpBtn;

    element.appendChild(downIcon);

    element.addEventListener('click', () => {
        if (element.classList.contains('down')) {
            element.classList.remove('down');
            downIcon.src = expandDownBtn; 
        } else {
            element.classList.add('down');
            downIcon.src = expandUpBtn; 
        }
    })
}