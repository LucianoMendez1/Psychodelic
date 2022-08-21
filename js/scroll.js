const readyManos = document.querySelector(".readyManos")
const container2 = document.querySelector(".container2")
const volverButton = document.querySelector(".volverButton")
const volverButton2 = document.querySelector(".volverButton2")
const volverButton3 = document.querySelector(".volverButton3")
const boxVideo = document.querySelector(".boxVideo")
const readyManosrelax = document.querySelector(".readyManosrelax")
const container3 = document.querySelector(".container3")

const readyManos1 = document.querySelector(".readyManos1")
const container4 = document.querySelector(".container4")

const container5 = document.querySelector(".container5")
const readyManosM = document.querySelector(".readyManosM")


const sig = document.querySelector(".sig")
 
    

gsap.registerPlugin(ScrollTrigger);

/* cierra el background de manos y entra en el video */
readyManos.addEventListener("click", function(){

    gsap.to(".text", {
        opacity:0,
    })

    gsap.to(".textos", {
        scale:5,
        yPercent: 360 ,
       
        duration:1,
    })

    setTimeout(() => {
        container2.classList.add("container2_active")

        boxVideo.innerHTML = 
        '<video class="videoPsycodelic" src="../img/y2mate.com - HD Trippy Animation courtesy of Anthony Francisco Schepperd_1080p.mp4" muted autoplay></video>'
        /* '<video class="videoPsycodelic" src="./img/y2mate.com - Chelou  Out Of Sight_1080p.mp4" muted autoplay></video>' */
       

        

    }, 1000);


})


/* /* /* cierra el video y vuelve al menu */
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
            yPercent:0,
            
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
        scale:13.3,
        yPercent: 500 ,
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


/* sector 3 */


readyManos1.addEventListener("click", function(){

    gsap.to(".text", {
        opacity:0,
    })

    gsap.to(".textos", {
        scale:2.4,
        yPercent:620 ,
        
        duration:1,
    })

    setTimeout(() => {
        container4.classList.add("container4_active")     

    }, 1000);


})
readyManosM.addEventListener("click", function(){

    gsap.to(".text", {
        opacity:0,
    })

    gsap.to(".textos", {
        scale:10,
        yPercent: 380 ,
       
        duration:1,
    })

    setTimeout(() => {
        container5.classList.add("container5_active")

        boxVideo.innerHTML = ''
       

        

    }, 1000);


 })
/* boton museoo */


/* cierra el background de manos y entra en el video */



/* cierra el video y vuelve al menu */
volverButton3.addEventListener("click", function(){
    
    gsap.to(".container5", {
        duration:0.5,
        delay:0
    })
    gsap.to(".text", {
        opacity:1,
        delay:2
    })
    container5.classList.remove("container5_active")
    setTimeout(() => {
    
        gsap.to(".textos", {
            scale:1,
            yPercent: 0 ,
            
            duration:1,
            opacity:1
        })
    
    }, 1000);




})



/* cierra el video y vuelve al menu */
volverButton3.addEventListener("click", function(){
    
    gsap.to(".container4", {
        duration:0.5,
        delay:0
    })
    gsap.to(".text", {
        opacity:1,
        delay:2
    })
    container4.classList.remove("container4_active")
    setTimeout(() => {
    
        gsap.to(".textos", {
            scale:1,
            yPercent:40 ,
            
            duration:1,
            opacity:1
        })
    
    }, 1000);


}) 