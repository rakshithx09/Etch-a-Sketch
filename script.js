let num = 0, divwidth = 0, boxDimensions = 0, boxesAll;

function createBoxes() {

    const canvas = document.getElementById('mainCanvas');
    console.log(canvas);
    num = 120;
    boxDimensions = 30 / num;
    console.log(boxDimensions);
    for (let i = 0; i < num * num; i++) {

        let box = document.createElement('div');
        canvas.appendChild(box);
        box.setAttribute('class', 'customBoxes');
        
        
    }
    boxesAll = document.querySelectorAll('.customBoxes');
    boxesAll.forEach(boxes => {
        
        boxes.style.cssText = ` background-color: beige ; width: ${30 / num}rem; height: ${30 / num}rem; box-sizing: border-box;`;
        
        boxes.addEventListener('mouseenter', () => {
            boxes.setAttribute('id', 'toggle') ;
            //boxes.classList.toggle('toggle');
            setTimeout(() => {
                console.log("timeout")
                boxes.removeAttribute('id') ;
                //boxes.classList.toggle('toggle');
            }, 200)
        });
        
        /*boxes.addEventListener('mouseleave', () => {
            boxes.removeAttribute('id') ;
            //boxes.classList.toggle('toggle');
        });

        */


    });
   /* for (let boxes of boxesAll) {
        boxes.addEventListener('onclick', () => {
            boxes.classList.toggle('toggle');
        })
        boxes.addEventListener('mouseleave', () => {
            boxes.classList.toggle('toggle');
        })
    }*/

}



createBoxes();
