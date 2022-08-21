const images = ["/img/angelcaido.jpg", "/img/museo2.gif", "/img/mujerpsy.png", "/img/museo4.gif","/img/museo5.gif","/img/museo.gif"];
const texts = [["Angel"], ["Gente"], ["Mujer"], [""],[""],[""]];



rgbKineticSlider = new rgbKineticSlider({
    slideImages: images,
    itemsTitles: texts,
    
    backgroundDisplacementSprite:
        "http://hmongouachon.com/_demos/rgbKineticSlider/map-9.jpg",
    cursorDisplacementSprite:
        "http://hmongouachon.com/_demos/rgbKineticSlider/displace-circle.png",
    cursorScaleIntensity: 8,
    cursorMomentum: 0.7,

    swipe: true,
    swipeDistance: window.innerWidth * 0.4,
    swipeScaleIntensity: 2,

    slideTransitionDuration: 0.6,
    transitionScaleIntensity: 30,
    transitionScaleAmplitude: 160,

    nav: true,
    navElement: ".main-nav",

    imagesRgbEffect: false,
    imagesRgbIntensity: 4,
    navImagesRgbIntensity: 120,
    
    textsDisplay: true,
    textTitleSize: 50,
    textsTiltEffect: true,
    googleFonts: ["Playfair Display:400"],
    textsRgbEffect: true,
    textsRgbIntensity: 1,
});


