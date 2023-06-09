let num = 0;
let boxDimensions=0 ;
let boxesAll ; //node list of all boxes  while setting dimensions
let removingBoxes; //node list of all the boxes while removing them
let flag=0 ; //flag to see if there are boxes currently present
let trailFlag=0, drawFlag=0, eraseFlag=0; 

const canvas = document.getElementById('mainCanvas');
const trail=document.getElementById('trail');
const draw=document.getElementById('draw');
const erase=document.getElementById('erase');


trail.addEventListener('click', trailfunc) ;
erase.addEventListener('click', erasefunc) ;
draw.addEventListener('click', drawfunc) ;

function initializeNum(){
    if(flag){
        removeBoxes();
    }
    num=0
    const input=document.getElementById('input');
    num=Number(input.value) ;
    createBoxes() ;
}

function createBoxes() {
    console.log(canvas);
    //num = 90;
    boxDimensions = 30 / num;
    console.log(boxDimensions);
    
    //creating box and gicing it a class
    for (let i = 0; i < num * num; i++) {
        let box = document.createElement('div');
        canvas.appendChild(box);
        box.setAttribute('class', 'customBoxes');
        box.style.cssText = ` background-color:black ; width: ${30 / num}rem; height: ${30 / num}rem; box-sizing: border-box;  `;
    }

    //getting reference to all boxes
    boxesAll = document.querySelectorAll('.customBoxes');
    flag=1 ;
}

function removeBoxes(){
    removingBoxes=document.querySelectorAll('.customBoxes');
    removingBoxes.forEach(box => {
        canvas.removeChild(box) ;
    })
}

function trailfunc(){

    removeEvents();

    trailFlag=1;
    drawFlag=0;
    eraseFlag=0;
      
    //setting dimensions of box acc to canvas size
    boxesAll.forEach(boxes => {

        //adding hover effect
        boxes.addEventListener('mouseenter', handleTrail);
    });
}
function erasefunc(){

    removeEvents();

    trailFlag=0;
    drawFlag=0;
    eraseFlag=1;

    boxesAll.forEach(boxes => {

       
        boxes.addEventListener('mouseenter', handleErase);
    });
}

function drawfunc(){

    removeEvents();

    trailFlag=0;
    drawFlag=1;
    eraseFlag=0;

    
    boxesAll.forEach(boxes => {
        boxes.addEventListener('mouseenter', handleDraw);
    });
}

function removeEvents(){
    
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
        });
    }



}

function handleTrail() {
    this.setAttribute('id', 'toggle');
    setTimeout(() => {
        this.removeAttribute('id');
    }, 200);
}

function handleErase() {
    this.removeAttribute('id', 'toggle');
}

function handleDraw() {
    this.setAttribute('id', 'toggle');
}
