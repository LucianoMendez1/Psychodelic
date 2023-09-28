const canvas = document.getElementById("canvas")
canvas.width = window.innerWidth -60;
canvas.height = 400;

let context =canvas.getContext("2d");
let star_background_color ="white";
context.fillStyle = star_background_color;
context.fillRect(0,0,canvas.width,canvas.height)



let draw_color ="black";
let draw_width = "2";
let is_drawing =false;
let restore_array =[];
let index = -1;


canvas.addEventListener("touchstart",start,false)
canvas.addEventListener("touchmove",start,false)
canvas.addEventListener("mousedown",start,false)
canvas.addEventListener("mousemove",start,false)

canvas.addEventListener("touchend",stop,false)
canvas.addEventListener("mouseup",stop,false)
canvas.addEventListener("mouseout",stop,false)

function change_color(element){
    draw_color = element.style.background;
}

function start (event){
    is_drawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft,
        event.clientY - canvas.offsetTop);
    event.preventDefault();
}

function draw(event){
    if(is_drawing){
        context.lineTo(event.clientX -canvas.offsetLeft,
            event.clientY - canvas.offsetTop);
            context.strokeStyle= draw_color;
            context.lineWidth = draw_width;
            context.lineCap ="round";
            context.lineJoin = "round";
            context.stoke();
    }
    event.preventDefault();
}

function stop (event){
    if(is_drawing){
        context.stroke();
        context.ClosePath();
        is_drawing = false;
    }
    event.preventDefault();
    if (event.type != 'mouseuout'){
    restore_array.push(context.getImageData(0,0,canvas.width,canvas.height));
    index += 1;
    console.log(restore_array);
    }
}

function clear_canvas(){
    context.fillStyle =star_background_color;
    context.clearReact(0,0,canvas.width,canvas.height);
    context.fillRect(0,0,canvas.width,canvas.height);
    restore_array =[];
    index = -1;
}

function undo_last(){
    if(index <= 0){
        clear_canvas
    }
    else {
        index -= 1;
        restore_array.pop();
        context.putImageData(restore_array[index],0,0);
    }
}