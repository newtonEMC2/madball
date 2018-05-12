;(function(global, __){
    
    "use strict";
    
    var controller = (function(){
        
        //////////////////////////////////
        //  variables
        //////////////////////////////////
        var cnv = document.getElementById("canvas"),
            ctx = cnv.getContext('2d'),

            canvas_w = cnv.width,
            canvas_h = cnv.height,

            col_arr = [],
            bird = null,

            frame_divisor = 200,
            frame_count = 0;

        //////////////////////////////////
        //  events
        ////////////////////////////////// 
        document.onkeydown = function(e){
            if(e.keyCode == 32) {
                bird.jump();
            }
        }

        //////////////////////////////////
        //  rendering
        //////////////////////////////////
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
                col_arr.push(global.model.Columns(ctx));
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
        
        
        //////////////////////////////////
        //  init
        //////////////////////////////////
        window.onload = function(){
            //instances
            bird = global.model.Bird(ctx);
            col_arr.push(global.model.Columns(ctx));
            requestAnimationFrame(render);
        }
        
        return {
            ctx: ctx,
            canvas_w: canvas_w,
            canvas_h: canvas_h,
        }
        
    
    })();
    
    global.controller = controller;
    window.madball = global;
    
    

})(window.madball || {}, window.__)

