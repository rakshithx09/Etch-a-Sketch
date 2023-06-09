let num = 0;
let boxDimensions=0 ;
let boxesAll ; //node list of all boxes  while setting dimensions
let removingBoxes; //node list of all the boxes while removing them
let flag=0 ; //flag to see if there are boxes currently present
const canvas = document.getElementById('mainCanvas');


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
    }

    //getting reference to all boxes
    boxesAll = document.querySelectorAll('.customBoxes');
    
    //setting dimensions of box acc to canvas size
    boxesAll.forEach(boxes => {

        boxes.style.cssText = ` background-color:black ; width: ${30 / num}rem; height: ${30 / num}rem; box-sizing: border-box; `;

        //adding hover effect
        boxes.addEventListener('mouseenter', () => {
            boxes.setAttribute('id', 'toggle');
            //boxes.classList.toggle('toggle');
            setTimeout(() => {
                boxes.removeAttribute('id');
                //boxes.classList.toggle('toggle');
            }, 200)
        });
    });
    flag=1 ;
}

function removeBoxes(){
    removingBoxes=document.querySelectorAll('.customBoxes');
    removingBoxes.forEach(box => {
        canvas.removeChild(box) ;
    })
}


