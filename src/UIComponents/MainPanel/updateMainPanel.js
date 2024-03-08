import { titleUpdate } from './updateProjectTitle.js';
import { updateContent } from './updateProjectContent.js';

document.addEventListener('DOMContentLoaded', () => {  
    titleUpdate();
    updateContent();
})