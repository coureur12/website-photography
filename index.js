
let slides = document.querySelectorAll('.slide-ana div');
let slideNumber = slides.length;



for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform = "translateX("+100*(index)+"%)";
}
let loop = 0 + 1000*slideNumber;

function goNext(){
    loop++;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX("+100*(index-loop%slideNumber)+"%)";
            }
}

function goPrev(){
    loop--;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX("+100*(index-loop%slideNumber)+"%)";
            }
}

// Auto increment
var int = 5000;
interval = setInterval(goNext, int);

var startInterval = function() {
    interval = setInterval(goNext, int);
}

