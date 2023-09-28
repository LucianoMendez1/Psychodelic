const scrollHorizontal = () => {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".panel");

    /* section antimation */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
         start:"top top",
         end:"100% 100%",
      }
    })


    tl.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".main",
        pin: true,
        scrub:1.5,
        snap: 1 / (sections.length - 1) ,
        end: () => "+=" + document.querySelector(".main").offsetWidth 
      }
    });
}

