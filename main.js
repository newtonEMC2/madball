//variables
var cnv = document.getElementById("canvas"),
    ctx = cnv.getContext('2d'),
    
    canvas_w = cnv.width,
    canvas_h = cnv.height,
    
    col_arr = [],
    
    frame_divisor = 200,
    frame_count = 0;

//instances
var bird = new Bird(ctx);

col_arr.push(new Columns(ctx));


//events 
document.onkeydown = function(e){
    if(e.keyCode == 32) {
        bird.jump();
    }
}
    

function render(){
    frame_count++;
    
    ctx.clearRect(0,0,canvas_w,canvas_h);
    
    //render bird
    bird.draw();
    bird.move();
    
    //render columns
    for(var i = col_arr.length - 1; i > -1; i--){
        col_arr[i].draw();
        col_arr[i].move();
    }
    
    //new column
    if(frame_count % frame_divisor == 0){
        col_arr.push(new Columns(ctx));
        frame_divisor = __.random(160, 200);
        frame_count = 0;
    }
    
    //delete column
    if(col_arr[0].x < -col_arr[0].col_w){
        col_arr.shift();
    }
    
    //check up for off limits
    bird.bounce_off();   
    
    requestAnimationFrame(render);
}   

requestAnimationFrame(render);