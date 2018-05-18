;(function(global){
    
    "use strict";
    
    var config = (function(){
        
        //////////////////////////////////
        //  ball
        //////////////////////////////////
        var ball_radius = 15,
            ball_color = "blue",
            gravity = .1,
            initial_position_X = global.controller.canvas_w / 2,
            initial_position_Y = global.controller.canvas_h / 2;
        
        
        
        
        
        //////////////////////////////////
        //  columns  
        //////////////////////////////////
        
        return {
            ball_radius: ball_radius,
            ball_color: ball_color,
            gravity: gravity,
            Xo: initial_position_X,
            Yo: initial_position_Y
        }
        
        
    })()

    
    
    
    global.config = config;
    window.madball = global;

})(window.madball || {})