
const container2 = document.querySelector(".container2");
const volverButton = document.querySelector(".volverButton");
const volverButton2 = document.querySelector(".volverButton2");
const volverButton3 = document.querySelector(".volverButton3");
const volverbuttonmuseo = document.querySelector(".volverbuttonmuseo");
const volverbuttonmuseo2 = document.querySelector(".volverbuttonmuseo2");
const volverButtonGod = document.querySelector(".volverButtonGod");
const boxVideo = document.querySelector(".boxVideo");
const boxVideogod = document.querySelector(".boxVideogod");
const boxVideorelax = document.querySelector(".boxVideorelax");
const boxVideomuseo = document.querySelector(".boxVideomuseo");
const boxVideomuseo2 = document.querySelector(".boxVideomuseo");
const readyManosrelax = document.querySelector(".readyManosrelax");
const readyManosmuseo = document.querySelector(".readyManosmuseo");

const container3 = document.querySelector(".container3");


const readyManosgod = document.querySelector(".readyManosgod");
const containergod = document.querySelector(".containergod ");
const containermuseo = document.querySelector(".containermuseo ");
const containermuseo2 = document.querySelector(".containermuseo2 ");


const readyManos1 = document.querySelector(".readyManos1");
const container4 = document.querySelector(".container4");



function alert() {  
    alert ("proximamente");  
 }  

const sig = document.querySelector(".sig")
 
    

gsap.registerPlugin(ScrollTrigger);

/* cierra el background de manos y entra en el video */





/* boton relax */




function iniciarVideoRelax() {
    gsap.to(".text", {
      opacity: 0,
    });
  
    gsap.to(".readyManosrelax", {
      scale: 15,
      yPercent: 900,
      duration: 1,
    });
  
    setTimeout(() => {
      container3.classList.add("container3_active");
      boxVideorelax.innerHTML = `
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/259293171?h=a290e9c8a7" width="1920" height="1080" frameborder="0" allowfullscreen="true" muted autoplay></iframe>
      `;
      const videoIframe = document.querySelector("iframe");
      videoIframe.requestFullscreen(); // Solicita pantalla completa
    }, 1000);
  }
  
  // Manejador de eventos para iniciar el video al hacer clic en "START"
  readyManosrelax.addEventListener("click", function () {
    iniciarVideoRelax();
  });
  
  // Manejador de eventos para volver a la sección anterior
  volverButton2.addEventListener("click", function () {
    gsap.to(".container3", {
      duration: 0.5,
      delay: 0,
    });
    gsap.to(".text", {
      opacity: 1,
      delay: 2,
    });
    container3.classList.remove("container3_active");
    const videoIframe = document.querySelector("iframe");
    videoIframe.pause(); // Pausa el video
    setTimeout(() => {
      gsap.to(".readyManosrelax", {
        scale: 1,
        yPercent: 0,
        duration: 1,
        opacity: 1,
      });
    }, 1000);
  });
  
  // Manejador de eventos para detectar cambios en el modo de pantalla completa
  document.addEventListener("fullscreenchange", function () {
    const videoIframe = document.querySelector("iframe");
  
    if (document.fullscreenElement) {
      // Se ha activado la pantalla completa
      videoIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    } else {
      // Se ha salido de la pantalla completa
      videoIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*'); // Pausa el video al salir de la pantalla completa
    }
  });
  








readyManos1.addEventListener("click", function(){

    gsap.to(".text", {
        opacity:0,
    })

    gsap.to(".textos", {
        scale:1,
        yPercent:0 ,
        xPercent:-100, 
        duration:0.3,
    })

    setTimeout(() => {
        container4.classList.add("container4_active")     

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
            yPercent:0,
            xPercent:0,
            duration:0.5,
            opacity:1
        })
    
    }, 1000);


}) 












readyManosgod.addEventListener("click", function(){

    gsap.to(".text", {
        opacity:0,
    })

    gsap.to(".textos", {
        scale:1,
        yPercent:0 ,
        xPercent:100, 
        duration:0.3,
    })

    setTimeout(() => {
        containergod.classList.add("containergod_active")

        boxVideogod.innerHTML = 
        '<video class="videoPsycodelic" src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1692915372/paraiso_ixq3xk.mp4" muted autoplay></video>'
          
 
           

    }, 1000);


})


/* /* /* cierra el video y vuelve al menu */
volverButtonGod.addEventListener("click", function(){
    
    gsap.to(".containergod", {
        duration:0.5,
        delay:0
    })
    gsap.to(".text", {
        opacity:1,
        delay:2
    })
    containergod.classList.remove("containergod_active")
    setTimeout(() => {
    
        gsap.to(".textos", {
            scale:1,
            yPercent:0,
            xPercent:0,
            duration:0.5,
            opacity:1
        })
    
    }, 1000);




})




/* sector museo  */


readyManosmuseo.addEventListener("click", function(){

    gsap.to(".text", {
        opacity:0,
    })

    gsap.to(".text", {
        scale:10,
        yPercent:60,
     
        duration:0.8,
    })
   

    setTimeout(() => {
        containermuseo.classList.add("containermuseo_active")
        
        boxVideomuseo.innerHTML = 
        '<img class="videoPsycodelicmuseo" src="./img/museo1.gif"></img>'
       
    }, 1000);

   

})





volverbuttonmuseo.addEventListener("click", function(){
    
    gsap.to(".containermuseo", {
        duration:0.5,
        delay:0
    })
    gsap.to(".text", {
        opacity:1,
        delay:2
    })
    containermuseo.classList.remove("containermuseo_active")
    setTimeout(() => {
    
        gsap.to(".text", {
            scale:1,
            yPercent: 0 ,
            
            duration:1,
            opacity:1
        })
    
    }, 1000);




}) 
sig.addEventListener("click", function(){
    /*  gsap.to(".containermuseo2", {
        scale:5,
        xPercent:-200,
        duration:1,
    })  */
    setTimeout(() => {
        boxVideomuseo2.classList.add("containermuseo_active2")
    
        boxVideomuseo2.innerHTML = 
        '<img class="videoPsycodelicmuseo2" src="./img/museo2.gif"></img>'
        
    }, 1000);
})


volverbuttonmuseo2.addEventListener("click", function(){
    
    gsap.to(".containermuseo", {
        duration:0.5,
        delay:1
    })
    gsap.to(".volverbuttonmuseo2", {
        opacity:1,
        delay:2
    })
    containermuseo2.classList.remove("containermuseo_active2")
    setTimeout(() => {
    
        gsap.to(".containermuseo2", {
            scale:1,
            yPercent: 0 ,
            
            duration:1,
            opacity:1
        })
    
    }, 1000);
})

