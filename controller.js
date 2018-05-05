;(function(global, __){
    
    "use strict";
    
    var controller = (function(){
        
        //variables
        var cnv = document.getElementById("canvas"),
            _ctx = cnv.getContext('2d'),

            _canvas_w = cnv.width,
            _canvas_h = cnv.height,

            col_arr = [],
            bird = null,

            frame_divisor = 200,
            frame_count = 0;

        //events 
        document.onkeydown = function(e){
            if(e.keyCode == 32) {
                bird.jump();
            }
        }


        function _render(){
            frame_count++;

            _ctx.clearRect(0,0,_canvas_w,_canvas_h);

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
                col_arr.push(global.model.Columns(_ctx));
                frame_divisor = __.random(160, 200);
                frame_count = 0;
            }

            //delete column
            if(col_arr[0].x < -col_arr[0].col_w){
                col_arr.shift();
            }

            //check up for off limits
            bird.bounce_off();   

            requestAnimationFrame(_render);
        }   
        
        window.onload = function(){
            //instances
            bird = global.model.Bird(_ctx);
            col_arr.push(global.model.Columns(_ctx));
            requestAnimationFrame(_render);
        }
        
        return {
            ctx: _ctx,
            canvas_w: _canvas_w,
            canvas_h: _canvas_h,
            render: _render
        }
        
    
    })();
    
    global.controller = controller;
    window.madball = global;
    
    

})(window.madball || {}, window.__)

