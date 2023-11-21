let sliders = document.querySelectorAll(".slides");
var counter = 0;

const goPrev = () => {
    counter--;
    if(counter <= 0){
        counter = sliders.length-1;
    }
    // console.log(counter)
    slideImage();
}

const goNext = () => {
    counter++;
    if(counter >= sliders.length){
        counter = 0;
    }
    // console.log(counter)
    slideImage();
}

const slideImage = () => {
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].style.transition = " transform 0.3s ease-in-out";
        sliders[i].style.transform = `translateX(${-counter * 100}%)`;
    }
}

// Set an initial position if needed
setInterval(() =>{
    goNext();
},2500)