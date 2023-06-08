let num = 0, divwidth = 0, boxDimensions = 0, boxesAll;


function initializeNum(){
    num=0
    const input=document.getElementById('input');
    num=Number(input.value) ;
    createBoxes()
}

function createBoxes() {

    const canvas = document.getElementById('mainCanvas');
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

        boxes.style.cssText = ` background-color: beige ; width: ${30 / num}rem; height: ${30 / num}rem; box-sizing: border-box;`;

        //adding hover effect
        boxes.addEventListener('mouseenter', () => {
            boxes.setAttribute('id', 'toggle');
            //boxes.classList.toggle('toggle');
            setTimeout(() => {
                console.log("timeout")
                boxes.removeAttribute('id');
                //boxes.classList.toggle('toggle');
            }, 1600)
        });
    });
}



//createBoxes();
