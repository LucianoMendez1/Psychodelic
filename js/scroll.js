const readyManos = document.querySelector(".readyManos")
const container2 = document.querySelector(".container2")
const volverButton = document.querySelector(".volverButton")
const texts = document.querySelector(".text")

gsap.registerPlugin(ScrollTrigger);

/* cierra el background de manos y entra en el video */
readyManos.addEventListener("click", function(){

    gsap.to(".text", {
        opacity:0,
    })

    gsap.to(".textos", {
        scale:10,
        yPercent: 370 ,
        duration: 1,
    })

    setTimeout(() => {
        container2.classList.add("container2_active")
    }, 1000);


})


/* cierra el video y vuelve al menu */
volverButton.addEventListener("click", function(){
    
    gsap.to(".container2", {
        duration:.1,
        delay:0
    })
    gsap.to(".text", {
        opacity:1,
        delay:2
    })
    container2.classList.remove("container2_active")
    setTimeout(() => {
    
        gsap.to(".textos", {
            scale:1,
            yPercent: 0 ,
            duration: 1,
            opacity:1
        })
    
    }, 1000);



})


