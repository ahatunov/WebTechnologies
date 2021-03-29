const BUTTON_SELECTOR = "data-value";
const LABEL_SELECTOR = "data-count";
const PICTURE_SELECTOR = "data-picture";
const COUNT_TEXT = "Кількість натискань: ";

function init() {
    let buttons = document.querySelectorAll(`[${BUTTON_SELECTOR}]`);
    let labels  = document.querySelectorAll(`[${LABEL_SELECTOR}]`);
    buttons.forEach(button => {
        button.addEventListener('click', (evt) => {
            let buttonName = evt.target.dataset.value;
            increaseClickCount(buttonName);
            drawFigure(buttonName);
        });
    });

    labels.forEach(label => {
        let labelName = label.attributes.getNamedItem(LABEL_SELECTOR).value;
        label.innerHTML = `${COUNT_TEXT}${getClickCount(labelName)}`;
    });

    let figures = document.querySelectorAll(`[${PICTURE_SELECTOR}]`);
    figures.forEach(figure => {
        figure.style.display = "none";
    });
}

init();

function increaseClickCount(name) {
    let count = getClickCount(name);
    localStorage.setItem(name, ++count);
    let label = getLabelByName(name);
    label.innerHTML = `${COUNT_TEXT}${count}`;
}

function getClickCount(name) {
    let count = localStorage.getItem(name);
    if(count === null) {
        count = 0;
    }
    return count;
}

function getLabelByName(name) {
    return document.querySelector(`[${LABEL_SELECTOR}=${name}]`);
}

function drawFigure(clickedFigureName) {
    let figures = document.querySelectorAll(`[${PICTURE_SELECTOR}]`);
    figures.forEach(figure => {
        if(figure.attributes.getNamedItem(PICTURE_SELECTOR).value === clickedFigureName) {
            figure.style.display = "block";
        } else {
            figure.style.display = "none";
        }
    });
}