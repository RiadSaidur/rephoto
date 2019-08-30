function scrollAppear(){
    var intro = document.querySelector('.introText');
    var posTop = intro.getBoundingClientRect().top;
    var appear = window.innerHeight/1.5;
    var hide =window.innerHeight/7;

    if(posTop < appear){
        intro.classList.add('intro-appear');
    }

    if(posTop < hide || posTop > appear){
        intro.classList.remove("intro-appear");
    }

    console.log(pos);

}

window.addEventListener('scroll', scrollAppear);