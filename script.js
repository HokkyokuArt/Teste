let target = null;
document.addEventListener("DOMContentLoaded",function(){
    target = document.querySelectorAll('[data-anime]');
})

const animationClass ='animate'

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
    target.forEach(function(element){
        if((windowTop)>element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }

    });
}

window.addEventListener('scroll', function() {
    animeScroll();
})

let targetBlur = null;
document.addEventListener("DOMContentLoaded",function(){
    targetBlur = document.querySelectorAll('[data-background]');
})

const blurClass = 'blur'

function blurScroll() {
    const windowTop = window.pageYOffset;
    targetBlur.forEach(function(element){
        if((windowTop)>element.offsetTop){
            element.classList.add(blurClass);
        }else{
            element.classList.remove(blurClass);
        }

    });
}

window.addEventListener('scroll', function() {
    blurScroll();
})


