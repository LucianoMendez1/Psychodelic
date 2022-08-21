$('.img_box').each(function() {
	var imgBox = $(this)
	var images = $(this).children('img');
	
	var myAnimation = new hoverEffect({
        parent: imgBox[0],
        intensity: 1,
    	angle:Math.PI / 8,
        image1: images[0].getAttribute('src'),
		image2: images[1].getAttribute('src'),
        displacementImage: imgBox[0].getAttribute('displacementImage')
    });
    
});
