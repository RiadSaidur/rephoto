function scrollAppear(){
    var intro = document.querySelector('.introText');
    var posTop = intro.getBoundingClientRect().top;
    var appear = window.innerHeight/1.5;
    var hide =window.innerHeight/10;

    if(posTop < appear){
        intro.classList.add('intro-appear');
    }

    if(posTop < hide || posTop > appear){
        intro.classList.remove("intro-appear");
    }
}
window.addEventListener('scroll', scrollAppear);

if(document.URL.includes("contacts.html")){
    document.querySelector(".switch").addEventListener('click',function (){
        document.querySelector(".pivot").classList.toggle("mobile");
        document.querySelector(".info").classList.toggle("mobile");
        console.log("clicked");
    })
}