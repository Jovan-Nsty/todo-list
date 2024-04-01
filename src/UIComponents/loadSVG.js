import fileCheck from '../assets/file-check.svg';
import delBtn from '../assets/delete.svg';

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