import fileCheck from '../assets/file-check.svg';

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