const readyManos = document.querySelector(".readyManos")
const container2 = document.querySelector(".container2")
const volverButton = document.querySelector(".volverButton")
const boxVideo = document.querySelector(".boxVideo")



 
    

gsap.registerPlugin(ScrollTrigger);

/* cierra el background de manos y entra en el video */
readyManos.addEventListener("click", function(){

    gsap.to(".text", {
        opacity:0,
    })

    gsap.to(".textos", {
        scale:20,
        yPercent: 400 ,
       
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









