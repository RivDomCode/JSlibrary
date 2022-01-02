const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', showHideBoxes);


showHideBoxes();

function showHideBoxes(){

    //With innerHeight we know the height og the viewport
    //Set the trigger point before reach the height of the viewport
    const triggerBottom = window.innerHeight/5 * 4;

    //We loop for each box checking if the top of the box is less or more
    //than the trigger point
    boxes.forEach((box)=> {
        const boxTop = box.getBoundingClientRect().top;  //we get the possition of the top of the box

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show')
        }


    })


    
};




