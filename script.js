let num = 0;
let boxDimensions = 0;
let boxesAll; //node list of all boxes  while setting dimensions
let removingBoxes; //node list of all the boxes while removing them
let flag = 0; //flag to see if there are boxes currently present
let trailFlag = 0, drawFlag = 0, eraseFlag = 0;
let isMouseDown = false;


let isRed=0, isWhite=0, isCyan=0, isMixed=0 ;


const canvas = document.getElementById('mainCanvas');
const trail = document.getElementById('trail');
const draw = document.getElementById('draw');
const erase = document.getElementById('erase');
const colorOptions = document.getElementById('colorOptions');

const RED = document.getElementById('red');
const WHITE = document.getElementById('white');
const CYAN = document.getElementById('cyan');
const MIXED = document.getElementById('mixed');

RED.addEventListener('click',() => {isRed=1; isWhite=0; isCyan=0; isMixed=0;});
WHITE.addEventListener('click',() => {isRed=0; isWhite=1; isCyan=0; isMixed=0;});
CYAN.addEventListener('click',() => {isRed=0; isWhite=0; isCyan=1; isMixed=0;});
MIXED.addEventListener('click',() => {isRed=0; isWhite=0; isCyan=0; isMixed=1;});


trail.addEventListener('click', trailfunc);
erase.addEventListener('click', erasefunc);
draw.addEventListener('click', drawfunc);

function initializeNum() {
    isMouseDown = false;
    removeEvents();
    if (flag) {
        removeBoxes();
    }
    num = 0
    const input = document.getElementById('input');
    num = Number(input.value);
    createBoxes();
}

function createBoxes() {
    console.log(canvas);
    //num = 90;
    boxDimensions = 40 / num;
    console.log(boxDimensions);

    //creating box and gicing it a class
    for (let i = 0; i < num * num; i++) {
        let box = document.createElement('div');
        canvas.appendChild(box);
        box.setAttribute('class', 'customBoxes');
        box.style.cssText = ` background-color:black ; width: ${boxDimensions}rem; height: ${boxDimensions}rem; box-sizing: border-box;  `;
    }

    //getting reference to all boxes
    boxesAll = document.querySelectorAll('.customBoxes');
    flag = 1;
}

function removeBoxes() {
    removingBoxes = document.querySelectorAll('.customBoxes');
    removingBoxes.forEach(box => {
        canvas.removeChild(box);
    })
}

function trailfunc() {

    removeEvents();



    colorOptions.style.display = 'flex';

    trailFlag = 1;
    drawFlag = 0;
    eraseFlag = 0;

    //setting dimensions of box acc to canvas size
    boxesAll.forEach(boxes => {

        //adding hover effect
        boxes.addEventListener('mouseenter', handleTrail);
    });
}
function erasefunc() {

    removeEvents();

    colorOptions.style.display = 'flex';

    trailFlag = 0;
    drawFlag = 0;
    eraseFlag = 1;

    boxesAll.forEach(boxes => {
        boxes.addEventListener('mouseenter', handleErase);
    });
}

function drawfunc() {

    removeEvents();

    colorOptions.style.display = 'flex';

    trailFlag = 0;
    drawFlag = 1;
    eraseFlag = 0;

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);

    boxesAll.forEach(boxes => {
        boxes.addEventListener('mouseover', handleDraw);

    });
}

function removeEvents() {

    if (trailFlag) {
        boxesAll.forEach(boxes => {
            boxes.removeEventListener('mouseenter', handleTrail);
        });

    }

    if (eraseFlag) {

        boxesAll.forEach(boxes => {
            boxes.removeEventListener('mouseenter', handleErase);
        });

    }

    if (drawFlag) {

        boxesAll.forEach(boxes => {
            boxes.removeEventListener('mouseenter', handleDraw);
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mouseup', handleMouseUp);
        });
    }


    //fhfhfhfhfhf
}

//before changing

function handleTrail() {

    if (isCyan) {
        this.style.backgroundColor='rgb(30, 245, 173)';
    setTimeout(() => {
        this.style.backgroundColor='black';
    }, 200);
    }

    if (isWhite) {
        this.style.backgroundColor='rgb(255, 255, 255)';
    setTimeout(() => {
        this.style.backgroundColor='black';
    }, 200);
    }
    if (isRed) {
        this.style.backgroundColor='rgb(236, 9, 9)';
    setTimeout(() => {
        this.style.backgroundColor='black';
    }, 200);
    }

    if (isMixed) {
        this.style.backgroundColor=`rgb( ${Number(Math.floor(Math.random()*266))}, ${Number(Math.floor(Math.random()*266))}, ${Number(Math.floor(Math.random()*266))})`;
    setTimeout(() => {
        this.style.backgroundColor='black';
    }, 200);
        
    }
}

function handleErase() {
    this.style.backgroundColor='black';
}

function handleDraw() {
    if (isMouseDown) {
        if (isRed) {
            this.style.backgroundColor='red';
        }
        if (isCyan) {
            this.style.backgroundColor='rgb(30, 245, 173)';
        } 
        if (isWhite) {
            this.style.backgroundColor='rgb(255, 255, 255)';
        }     
        if (isMixed) {
            this.style.backgroundColor=`rgb( ${Number(Math.floor(Math.random()*266))}, ${Number(Math.floor(Math.random()*266))}, ${Number(Math.floor(Math.random()*266))})`;
        }
    }
}

function handleMouseDown() {
    isMouseDown = true;
}

function handleMouseUp() {
    isMouseDown = false;
}
