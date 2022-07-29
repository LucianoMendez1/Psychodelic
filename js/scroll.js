const readyManos = document.querySelector(".readyManos")
const container2 = document.querySelector(".container2")
const volverButton = document.querySelector(".volverButton")
const volverButton2 = document.querySelector(".volverButton2")
const boxVideo = document.querySelector(".boxVideo")
const readyManosrelax = document.querySelector(".readyManosrelax")
const container3 = document.querySelector(".container3")



 
    

gsap.registerPlugin(ScrollTrigger);

/* cierra el background de manos y entra en el video */
readyManos.addEventListener("click", function(){

    gsap.to(".text", {
        opacity:0,
    })

    gsap.to(".textos", {
        scale:10,
        yPercent: 380 ,
       
        duration:1,
    })

    setTimeout(() => {
        container2.classList.add("container2_active")

        boxVideo.innerHTML = '<video class="videoPsycodelic" src="./img/y2mate.com - Chelou  Out Of Sight_1080p.mp4" muted autoplay></video>'
       

        

    }, 1000);


})


/* cierra el video y vuelve al menu */
volverButton.addEventListener("click", function(){
    
    gsap.to(".container2", {
        duration:0.5,
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
            
            duration:1,
            opacity:1
        })
    
    }, 1000);




})


/* boton relax */




/* cierra el background de manos y entra en el video */
readyManosrelax.addEventListener("click", function(){

    gsap.to(".text", {
        opacity:0,
    })

    gsap.to(".textos", {
        scale:30,
        yPercent: 600 ,
        duration:1,
    })

    setTimeout(() => {
        container3.classList.add("container3_active")
        

    }, 1000);


})


volverButton2.addEventListener("click", function(){
    
    gsap.to(".container3", {
        duration:0.5,
        delay:0
    })
    gsap.to(".text", {
        opacity:1,
        delay:2
    })
    container3.classList.remove("container3_active")
    setTimeout(() => {
    
        gsap.to(".textos", {
            scale:1,
            yPercent: 0 ,
            
            duration:1,
            opacity:1
        })
    
    }, 1000);




})




